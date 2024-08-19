from neo4j import GraphDatabase
import dotenv
import os
import pandas as pd


load_status = dotenv.load_dotenv()
if load_status is False:
    raise RuntimeError('Environment variables not loaded.')

URI = os.getenv("NEO4J_URI")
user = os.getenv("NEO4J_USERNAME")
password = os.getenv("NEO4J_PASSWORD")


class GetConnection:

    def __init__(self, uri, database, user, password):
        self.driver = GraphDatabase.driver(uri, auth=(user, password))
        self.database = database
        print(self.driver," --- ",self.database)

    def close(self):
        self.driver.close()

    def graph_read(self, graphQuery, **graphArgs):
        dynamicQuery = self.add_labels(graphQuery, **graphArgs)
        with self.driver.session(database=self.database) as session:
            return session.read_transaction(self.run_single_transaction, dynamicQuery, graphArgs)
    
    def add_labels(self, graphQuery, **labels):
        for key, value in labels.items():
            graphQuery = graphQuery.replace(f"#{key}", str(value))
        return graphQuery

    @staticmethod
    def run_single_transaction(tx, graphQuery, graphArgs):
        result = tx.run(graphQuery, **graphArgs)
        return [record.values() for record in result]

    @staticmethod
    def run_batch_transactions(tx, queries):
        for query in queries:
            tx.run(query)

def getConnection():
    return GetConnection(URI, "neo4j", user, password)

def flatten_matrix(matrix):
    return [item for sublist in matrix for item in sublist]

def getAllNodes():

    neo_db = getConnection()

    nodes_query = (
        """
        MATCH (n)
        RETURN *
        """
    )

    nodes = flatten_matrix(neo_db.graph_read(nodes_query))

    print("Printing all nodes in graph")
    for node in nodes:
        print(node['name'])
    
    return True

def getAllCompanies():

    neo_db = getConnection()

    nodes_query = (
        """
        MATCH (n:Company)
        RETURN n
        LIMIT 25
        """
    )

    nodes = flatten_matrix(neo_db.graph_read(nodes_query))

    # print("Printing all company nodes in graph")
    # for node in nodes:
    #     print(node['name'])
    
    return nodes

def getAllCities():
    print(URI," ",user," ",password)
    neo_db = getConnection()
    print(neo_db)

    nodes_query = (
        """
        MATCH (n:City)
        RETURN n
        LIMIT 25
        """
    )
    kk=neo_db.graph_read(nodes_query)

    nodes = flatten_matrix(neo_db.graph_read(nodes_query))
    # nodes_serialized = [node.to_dict() if hasattr(node, 'to_dict') else node for node in nodes]
    print("Printing all city nodes in graph")
    # for node in nodes:
    #     print(node['name'])
    
    return nodes

def getAllCitiesBelongingToState():

    neo_db = getConnection()

    nodes_query = (
        """
        MATCH (n:City)-[:IS_IN]-
        ()
        RETURN n
        """
    )

    nodes = flatten_matrix(neo_db.graph_read(nodes_query))

    print("Printing all city nodes with IS_IN relationship")
    for node in nodes:
        print(node['name'])
    
    return True


#  new analytics functions

def getCompany_byname(query):
    neo_db = getConnection()

    nodes_query = (
        f"""
        MATCH (n:Company) 
        WHERE n.name CONTAINS "{query}"
        RETURN n
        LIMIT 25;
        """
    )

    nodes = flatten_matrix(neo_db.graph_read(nodes_query))

    print("Printing all company nodes in graph")
    # for node in nodes:
    #     print(node['name'])
    
    return nodes

def getCompany_bycat(query):
    neo_db = getConnection()

    nodes_query = f"""
        MATCH (c:Company)-[:IS_IN_FEED]->(f:Feed {{name: "{query}"}})
        RETURN c LIMIT 25;
    """

    nodes = flatten_matrix(neo_db.graph_read(nodes_query))

    print("Printing all company nodes in graph")
    # for node in nodes:
    #     print(node['name'])
    
    return nodes

def getAllcategories():
    neo_db = getConnection()

    nodes_query = f"""
       MATCH (n:Feed) RETURN n;
    """

    nodes = flatten_matrix(neo_db.graph_read(nodes_query))

    return nodes

def getAll_investor(company_name):
    neo_db = getConnection()
     
    nodes_query = f"""
    MATCH (i:InstitutionalInvestor)-[:INVESTED_IN]->(c:Company {{name: "{company_name}"}})
    RETURN i;
    """
    nodes = flatten_matrix(neo_db.graph_read(nodes_query))
    return nodes

def getAll_founders(company_name):
    neo_db = getConnection()
     
    nodes_query = f"""
    MATCH (i:Person)-[:IS_COFOUNDER_OF]->(c:Company {{name: "{company_name}"}})
    RETURN i;
    """
    nodes = flatten_matrix(neo_db.graph_read(nodes_query))
    return nodes


def getCompanystage(company_name):
    neo_db = getConnection()
     
    nodes_query = f"""
    MATCH (i:CompanyStage)-[r:IS_AT_FUNDED_STAGE]-(c:Company {{name: "{company_name}"}})
    RETURN i;
    """
    nodes = flatten_matrix(neo_db.graph_read(nodes_query))
    return nodes

def getAll_competitors(company_name):
    neo_db = getConnection()
     
    nodes_query = f"""
    MATCH (c:Company {{name: "{company_name}"}})-[:IS_COMPETITOR_OF]->(competitor:Company)
 RETURN competitor
    """
    nodes = flatten_matrix(neo_db.graph_read(nodes_query))
    return nodes

# 