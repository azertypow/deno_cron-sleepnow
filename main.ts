import { cron } from "https://deno.land/x/deno_cron/cron.ts"

const args = Deno.args
if (args.length < 2) {
  console.error("Veuillez fournir l'heure et la minute en argument.")
  Deno.exit(1)
}

const hour = parseInt(args[0], 10)
const minute = parseInt(args[1], 10)

if (isNaN(hour) || isNaN(minute) || hour < 0 || hour > 23 || minute < 0 || minute > 59) {
  console.error("Veuillez fournir une heure et minute valides.")
  Deno.exit(1)
}

const cronExpression = `${minute} ${hour} * * *`

cron(cronExpression, async () => {
  console.info(`Tâche de veille démarrée à ${hour}:${minute}`)
  await sleepMac()
})

console.info(`Tâche programmée à ${hour}:${minute} tous les jours.`)

/// functions

async function sleepMac() {
  const cmd = new Deno.Command("pmset", {
    args: ["sleepnow"],
  })
  await cmd.output()
  console.info("Mac mis en veille")
}
