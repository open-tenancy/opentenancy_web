# System design doc
## PREMISE
* As easy to use as possible
* For legal and technologically challenged people to use an app easily 
* Legal terminology defined as simply as possible
* Modern looks
* Chatbot style - They put in ideas and it responds
* Branch style? they go through an interview style until system has enough info to construct answer (have a 'Not What You're Looking For?' button to keep getting info 

### MVP
Renting:
- repairs
- council tax

## USE CASES
For a student to find out arbitrary law in terms of renting and how it applies to them
Allow a student to input their contract specifics so that advice is applicable to them
Examples:
- "I have mold in my room, tenancy is joint, can I sue?"
- "My landlord is barging in unannounced with no warning, can I sue?"
- "My security deposit has been taken after a leak the landlord didn't fix, can I sue?"

## USER STORY
- Student Troy Taylor, low income and not very available in terms of time to mess about with law and read up on it.
Currently Troy is having a dispute with the landlord, and is unsure about some specific terms. He has exams coming up
and doesn't have time to contact a lawyer or read up on his own, but needs to deal with the dispute as soon as possible
so that his deposit isn't taken away. He is doing a writing course and is unfamiliar with computers.
He logs onto the app 
Makes an account - do we need an account?
Chooses the repairs category
- Do you have a contract on hand?
- yes or no
- are you a student?
- yes no etc
- Is it a joint tenancy?
- yes no etc

## SYSTEM REQUIREMENTS
### UI
Simple, accessable layout. 
Bold/large writing.
Accessability concerns - e-reader compatible, responsive layout for big/small screens.

### BACKEND
Docassemble
### FRONTEND

## ARCHITECTURE/TECH
### WEBSITE
Potential Pages: 
* Home Page - landing page, simple and clean UI - either like a 'Get Advice' or 'Learn More' button maybe?
* Advice (page with chatbot? just the one page ideally, can have a number of starting concerns to guide user (ie rent disputes, council tax, repairs)
* About - how to use, why we did it
* FAQ 

## OTHER
- scalability concerns over large number of users
- legality concerns and the disclaimer we'll need to add : do you know this advice is not from a lawyer?
