import { Command } from "commander";
import * as figlet from "figlet";
import process from "process";

const NAME = "Queue-Up";
const TITLE: string = figlet.textSync(NAME);

const SUPPORTED_TYPES = ["FIFO", "Random"];

const program = new Command()
    .name(NAME)
    .version("1.0.0")
    .description("A queueing service.");

program
    .command("list")
    .description("List all active containers.")
    .option("-v, --verbose", "Increased verbosity of containers.")
    .action((options) => {
        throw new Error("Not implemented yet");
    });

program
    .command("rm <queue>")
    .description("Remove a container.")
    .action((options) => {
        throw new Error("Not implemented yet");
    });

program
    .command("create <queue> <type>")
    .description(
        `Create a container. Supported types: ${SUPPORTED_TYPES.join(", ")}`
    )
    .action((options) => {
        throw new Error("Not implemented yet");
    });

program
    .command("add <container> <item>")
    .description("Add an item to a container.")
    .action((options) => {
        throw new Error("Not implemented yet");
    });

console.log(TITLE);
program.parse(process.argv);
const options = program.opts();
