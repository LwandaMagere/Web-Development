// reducto.c -- reduces your files by two-thirds!
#include <stdio.h>
#include <stdlib.h> // for exit() prototype
#include <string.h>
#define LEN 12

int main(int argc, char *argv[]) 
{
    FILE *in, *out; // declare two file pointers
    int ch;
    char name[LEN];
    int count = 0;

    // check for command-line arguments
    if (argc < 2) 
    {
        fprintf(stderr, "Usage: %s filename\n", argv[0]);
        exit(EXIT_FAILURE);
    }
    // set up input
    if ((in = fopen(argv[1], "r")) == NULL) 
    {
        fprintf(stderr, "I couldn't open the file \"%s\"\n", argv[1]);
        exit(EXIT_FAILURE);
    }
    // set up output
    strncpy(name, argv[1], LEN - 5); // copy filename
    name[LEN - 5] = '\0';
    strcat(name, ".red"); //  append .red
    if ((out = fopen(name, "w")) == NULL) 
    {   // open the file for writing
        fprintf(stderr,"Can't create output file.\n");
        exit(3);
    }
    // copy data
    while ((ch = getc(in)) != EOF)
        if (count++ % 3 == 0)
            putc(ch, out);     // print every 3rd char
    // clean up
    if (fclose(in) != 0 || fclose(out) != 0)
        fprintf(stderr,"Error in closing files\n");
        
    return 0;
}
