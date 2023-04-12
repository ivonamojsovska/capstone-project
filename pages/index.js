import { getTodos } from "@/utils/actions";

export default function Home({ todos }) {
  return (
    <div>
      <h1>This is the main page</h1>
    </div>
  );
}

// This page will eventually display the most up to date list of our dogs, so it should be server-side rendered. To designate that we will page is serversideprops!
export async function getServerSideProps(ctx) {
  const todos = JSON.parse(JSON.stringify(await getTodos()));

  console.log(todos)
  // This function should return an object with a props property with all the props we want for this page
  // keep in mind this function is run server-side
  return {
    props: {
      title: "Todo App - Main Page",
      description: "This page will show us all our Todo",
      todos
    },
  };
}
