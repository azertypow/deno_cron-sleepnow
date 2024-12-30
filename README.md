# deno cron sleepnow

A simple Deno script to schedule Mac sleep mode using a cron expression.

This script uses the deno_cron library to schedule a daily task that puts a Mac computer to sleep at a specific time.

``` bash
deno run --allow-run main.ts <hour> <minute>
```
