import { NextResponse } from 'next/server'
import todos from './data.json'
import { getTodos, createTodo } from '@/app/utils/actions'

export async function handler(req, res) {
    try {
        if (req.method === 'GET') res.json(await getTodos())
    } catch (err) {
        console.log(err)
    }

}



