# Counter-App
## Four classes in this app. 
* The parent App control the state and handle all actions.
* The Counters pass the state and actions from App to the Counter
* The Counter is at the lowest level which is a model rendering each simple duplicate component based on the props passed from the Counters
* Navbar receives the length of counters from App and shows on the screen
## Functions
* Increment and decrement the values of counters (the value of each counter can't less than zero)
* Delete counters
* Reset values for all counters
* Calculate how many counters are greater than zero
