import { NextResponse } from 'next/server'
import todos from './data.json'
import { getTodos, createTodo } from '@/utils/actions'

export async function GET(req) {
    return NextResponse.json(await getTodos())
}

export async function POST(req) {
    return NextResponse.json(await createTodo(req.body) ? await getTodos() : { error: 'something happened' })

}








