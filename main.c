//
//  main.c
//  classworkonpermutation
//
//  Created by David Korede on 20/06/2024.
//

#include <stdio.h>

int main(void) {
    int n, r;
    int i;
    float sum = 1;

    printf("Enter n: ");
    scanf("%d", &n);
    
    printf("Enter r: ");
    scanf("%d", &r);
    
    if (r > n) {
        printf("Invalid input: r should be less than or equal to n\n");
        return 1;
    }
    
    for (i = 0; i < r; i++) {
        sum = sum * (n - i);
    }
    
    printf("nP%dr = %f\n", r, sum);

    return 0;
}
