

// Works for all test cases within time limit
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