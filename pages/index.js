import { getTodos } from "@/utils/actions";
import Link from "next/link";
import TasksList from "../components/taskList";
import { useRouter } from 'next/router'
import Header from "@/components/header";
import { useSession } from "next-auth/react";




export default function Home({ todos }) {

  const { data: session } = useSession()

  return (
    <>
      <Header />
      <main className="container">
        <TasksList todos={todos} />
      </main>
    </>

  );
}

function User({ session }) {
  return (
    <div className="container">
      <h5>{session.user.fullName}</h5>
      <div>
        <button>Sign out</button>
      </div>
    </div>

  )
}

function Guest() {
  return (
    <div className="container">
      <h5>Guest User</h5>
      <div>
        <button>Sign in</button>
      </div>
    </div>
  )
}


export async function getServerSideProps(ctx) {
  const todos = JSON.parse(JSON.stringify(await getTodos()));
  return {
    props: {
      title: "Todo App - Main Page",
      description: "This page will show us all our Todo",
      todos
    },
  };
}
