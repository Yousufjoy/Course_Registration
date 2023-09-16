Ans 1 : 3 Features of this project : 

1) Add courses for registration and see the course names.
2) For each course you can see how much much credit is being added.
3) For each student you the limit of 20 credit so you can not exceed the limit of 20 credit and also the remaining credit can not be less than 0.


Ans 2 : How I managed states 

**subjectName State**:
   - I use this state to keep a list of the names of the courses I've chosen.
   - When I pick a course, I check if it's already on the list. If not, I add it. If it is, I inform myself that it's already there.

**creditHour State**:
   - I use this state to keep track of how many credit hours I've chosen in total.
   - When I pick a course, I add the course's credit hours to the total. However, I ensure that I don't exceed 20 hours, and I show an alert message if I do.

**remainingCredit State**:
   - This state shows how many credit hours I can still choose.
   - When I pick a course, I subtract its credit hours from the remaining amount. I also make sure it doesn't go below zero, and if it does, show an alert message that I can't choose more.
