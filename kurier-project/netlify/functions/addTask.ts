// import { Handler } from '@netlify/functions'
// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient();

// interface Task {
//   UserId: string,
//   title: string,
//   description: string,
//   status: string,
//   currBid: number,
//   newBid: number,
// }

// const handler: Handler = async (event, context) => {
//   if(event.body) {
//     const newTask = JSON.parse(event.body) as Task;
//     await prisma.tasks.create({
//       data: {
//         UserId: BigInt(newTask.UserId) as any,
//         currbid: newTask.currBid,
//         title: newTask.title,
//         description: "",
//         status: "open",
//         newbid: 0,
//         KourierId: BigInt(100),
        


//       },
//     });

//     return {
//       statusCode: 200,
//       body: JSON.stringify(newTask)
//     };
//   }

//   return {
//     statusCode: 500
//   };
// }


// export { handler }
