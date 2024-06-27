// First attempt - worked but not fast enough for 3/32 cases
function getMaxAdditionalDinersCount(N, K, M, S) {
  
    // Sort the array S
    S.sort((a, b) => a - b);
  
    var countNewSeats = 0
   
    // Loop over all seats
    for (let q = 1; q < N+1; q++) {
     
      var possibleSeat = q;
       
        // check if possibleSeat range is taken
        var seatTaken = S.filter(item => item >= possibleSeat-K && item <= possibleSeat+K);
  
        // if no seats in that range
        if(seatTaken.length < 1){
          //append seat to S array
          S.push(possibleSeat);
          countNewSeats = countNewSeats +1
        }
       
   }
   return countNewSeats;
 }

 

// Final version - works for all test cases within time limit
function getMaxAdditionalDinersCount(N, K, M, S) {

    // Sort the existing diners' seat numbers in ascending order
    S.sort((a, b) => a - b);

    let i = 0; // Index for iterating through existing diners
    let count = 0; // Total count of additional diners
    let start = 1; // Start seat for calculating allowed spaces
    let end = 1; // End seat for calculating allowed spaces

    // Calculate the number of people who can sit before the first and after the last person already sitting
  
    // represents the number of empty seats before the first person.
    var emptySeatsBeforeFirstPerson = S[0] - K - 1;
    var usableSeatsBeforeFirstPerson = emptySeatsBeforeFirstPerson / (K + 1)
    var emptySeatsAfterLastPerson = N - (S[M - 1] + K + 1) + 1;
    var usableSeatsAfterLastPerson = emptySeatsAfterLastPerson / (K + 1)
  
    // Add usable seats at start and end to the count
    count += Math.max(Math.ceil(usableSeatsBeforeFirstPerson), 0); // Left side
    count += Math.max(Math.ceil(usableSeatsAfterLastPerson), 0); // Right side

    // Calculate for all the allowed spaces between people
    // Loop over people currently sat down
    while (i < M - 1) {
        // Person i + social distancing spacer after
        start = S[i] + K + 1;
        // Person ii + social distancing spacer before
        end = S[++i] - K - 1;
        // Work out the gap between, see how many usable spaces exist
        count += Math.ceil((end - start + 1) / (K + 1));
    }

    return count;
}