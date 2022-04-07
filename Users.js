const usersArray1 = ['Matt Johnson', 'Matt Johnson', 'Bart Paden', 'Ryan Doss', 'Jared Malcom'];
const usersArray2 = ['Matt Johnson', 'Bart Paden', 'Bart Paden', 'Jordan Heigle', 'Jordan Heigle', 'Tyler Viles'];
const usersArray3 = usersArray1.concat(usersArray2);
const usersArray = usersArray3.filter((user, index) => usersArray3.indexOf(user) === index );

export default usersArray;