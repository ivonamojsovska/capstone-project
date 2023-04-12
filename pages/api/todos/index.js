import { getTodos, createTodo } from "@/utils/actions";

export default async function handler(req, res) {
    try {
        // INDEX ROUTE
        if (req.method === "GET") res.json(await getTodos());

        // CREATE ROUTE
        if (req.method === "POST")
            res.json(await
                createTodo(req.body) ? await getTodos() : { error: "something happened" }
            );

        // ANYTHING ELSE
        if (!["GET", "POST"].includes(req.method))
            res.status(404).send("no response for that method");
    } catch (error) {
        res.status(400).json({ error });
    }
}
