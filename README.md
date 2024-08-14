## Cohesyve Assessment 
This project is part of the hiring process for the full-stack developer intern position at [Cohesyve](https://cohesyve.com). The goal of this assessment is to evaluate your product building skills and your comfort with the underlying tech stack.
<br/><br/>
The provided neo4j graph contains information on 25,000 D2C companies globally along with their founders, angel investors and institutional investors. Your task is to build a web based tool that can help D2C founders identify relevant competitors and find potential investors.
<br/><br/>
You have full creative freedom on the frontend design and any additional functionality that you feel will be helpful. 
<br/><br/>
<b>The task should not take you more than 2 days to complete. Start by forking this repository and send us your submissions (link to your forked repo) as a chat message on Internshala by end of day on Thursday (Aug 15, 2024).</b> 

<br/>

### 1. Requirements
Create a single page dashboard application to explore the neo4j data and extract useful information for the users. 

a. Preferred technology stack (submissions with other relevant technologies will also be evaluated):
  <br />&emsp;i. Backend: Python django
  <br />&emsp;ii. Frontend: Next.js

b. The tool has one primary user:
    <br />&emsp;i. D2C Entreprenuers - to identify relevant venture capitalists, related companies and competitors

c. Tool should be interactive, allowing users to explore underlying data, such as relationships between companies and VCs.
  
d. Integrated insights to highlight key parameters like investment trends, competitor analysis, and market gaps.
  
e. The tool should require the user to submit their email before they get access to the tool
    
f. Scalable UI design from mobile to laptop screens

<br/>

### 2. Starter Project

A starter django + next.js project is provided with the built in neo4j connector and sample neo4j queries (in the data/data.py file) for your reference. <b>Do not write/update/delete any data on the graph.</b>

To run the codebase on your end, make sure you have [docker](https://docs.docker.com/engine/install/) and [docker compose](https://docs.docker.com/compose/install/) installed on your machine.

Then, run the commend `ENVIRONMENT=development docker compose up`

Frontend will be accessible on http://localhost:3000<br/>
Backend will be accessible on http://localhost:8000

Further information on neo4j can be obtained through the Neo4j documentation: https://neo4j.com/docs/

<br/>

### 3. Submissions

To submit your work, send us a chat message on Internshala with your forked repo URL.<br />
If you have any clarifying questions, reach out to us.
