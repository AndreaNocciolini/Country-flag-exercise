import fastify from 'fastify'
// import autoload from "@fastify/autoload";
// import path from "path";

const server = fastify()

server.get('/ping', async (request, reply) => {
    return 'pong\n'
})

// server.register(autoload, {
//     dir: path.resolve(__dirname, "./routes")
// });

server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})