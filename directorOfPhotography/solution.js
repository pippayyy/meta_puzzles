function getArtisticPhotographCount(N, C, X, Y) {
    // Define a helper function to count artistic photographs from left to right
    const countLtoR = () => {
        let count = 0;
     
      // Iterate through the cells in the string C from index 0 to N - X - X. This ensures that there is enough space for the photographer, actor, and backdrop within the specified distance range.
        for (let p = 0; p < N - X - X; p++) {
            if (C[p] != 'P') continue; // Skip if not a photographer
 
            // Iterate through the cells from p + X to p + Y, where p is the photographer’s index.This represents the valid range for an actor.
            for (let a = p + X; a <= p + Y; a++) {
                if (C[a] != 'A') continue; // Skip if not an actor
 
                // Iterate through the cells from a + X to a + Y, where a is the actor’s index. This represents the valid range for a backdrop.
                for (let b = a + X; b <= a + Y; b++) {
                    if (C[b] != 'B') continue; // Skip if not a backdrop
                    count++; // Increment the count for a valid artistic photograph
                }
            }
        }
        return count;
    }
 
    // Calculate the count of artistic photographs from left to right
    const LtoR = countLtoR();
 
    // Reverse the string C to consider photographs from right to left
    C = [...C].reverse().join('');
 
    // Calculate the count of artistic photographs from right to left
    const RtoL = countLtoR();
 
    // Return the total count by summing both directions
    return LtoR + RtoL;
}