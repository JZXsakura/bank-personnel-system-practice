# UML-диаграмма

Employee
-----------------
id
fullName
status
hireDate

Department
-----------------
id
name
code

Position
-----------------
id
title
salary

EmploymentEvent
-----------------
id
eventType
eventDate

Связи:

Employee * ---- 1 Department
Employee * ---- 1 Position
Employee 1 ---- * EmploymentEvent 