# Myers Diff Algorithm

The **Myers Diff Algorithm** is an efficient algorithm for computing the differences between two sequences (usually strings).
It was developed by Eugene Myers and is widely used in text comparison tools, version control systems, and similar applications.

You can read more about it [here](https://blog.jcoglan.com/2017/02/12/the-myers-diff-algorithm-part-1/).

command

``` bash
    npm i
    node diff.js 
    Enter the first string: abcd
    Enter the second string: abdf
```

output show color diffrence between added and removed string
   ```bash
    Differences: +a +b +d -a -b -c -d +f
    Inline output: abdabcdf
   ```
<img src="https://github.com/mridul037/myers-diff-algo/blob/main/img.png" width="348" height="221"/>

