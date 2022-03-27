// import { Handler } from '@netlify/functions'
// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient();

// interface Task {
//   id: string,
//   title: string,
//   description: string,
//   type: string,
//   status: string,
//   currBid: number,
//   newBid: number,
// }

// const handler: Handler = async (event, context) => {
//   if(event.body) {
//     const newTask = JSON.parse(event.body) as TaskEntry;
//     await prisma.task.create({
//       data: {
//         player_id: BigInt(newTask.player_id),
//         score: parseInt(newScore.score)
//       },
//     });

//     return {
//       statusCode: 200,
//       body: JSON.stringify(newScore)
//     };
//   }

//   return {
//     statusCode: 500
//   };
// }


// export { handler }
