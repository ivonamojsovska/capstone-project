import { getTodos } from "@/utils/actions";
import Link from "next/link";
import TasksList from "../components/taskList";
import { useRouter } from 'next/router'
import Header from "@/components/header";




export default function Home({ todos }) {
  const router = useRouter();
  const data = router.query
  const activeUser = { ...data }
  console.log(activeUser)

  return (
    <>
      <Header data={activeUser} />
      <main className="container">
        <TasksList todos={todos} />
      </main>
    </>

  );
}

// This page will eventually display the most up to date list of our dogs, so it should be server-side rendered. To designate that we will page is serversideprops!
export async function getServerSideProps(ctx) {
  const todos = JSON.parse(JSON.stringify(await getTodos()));


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
