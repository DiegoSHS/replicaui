import { ArrowRightIcon, CheckIcon, FireIcon, PencilIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Input({ children, ...props }) {
    return (
        <input type='text' className='text-black w-full p-2 m-2 border-2 border-red-200 rounded-md hover:border-red-400' {...props}>{children}</input>
    )
}
export const Paper = ({ children, ...props }) => {
    return (
        <div {...props}>{children}</div>
    )
}
export const Button = ({ children }) => {
    return (
        <button className='m-2 w-fit bg-red-600 px-6 py-2 rounded-full text-white'>{children}</button>
    )
}
export const IconButton = ({ children, ...props }) => {
    return (
        <button {...props} className='flex items-center gap-1 m-2 w-fit bg-red-600 pl-3 rounded-full text-white shadow hover:bg-red-200 hover:text-red-600'>{children}</button>
    )
}
export const ReadMore = () => {
    return (
        <button className='text-red-400 flex items-center gap-2 hover:text-red-600'>Read more<ArrowRightIcon width={20} /></button>
    )
}

export const SubjectCard = ({ defaultSubject, state }) => {
    const [subject, setSubject] = useState(defaultSubject)
    const [editmode, setEditmode] = useState(false)
    const { editItem, deleteItem } = state
    const handleChange = (e) => {
        setSubject((subject) => ({ ...subject, [e.target.name]: e.target.value }))
    }
    const handleDelete = () => {
        deleteItem(subject.id)
    }
    const handleEdit = () => {
        setEditmode((editmode) => !editmode)
    }
    const handleSave = () => {
        editItem(subject.id, subject)
        handleEdit()
    }
    return (
        <Paper className='p-5 bg-white rounded-md shadow flex flex-col gap-1 shadow' onChange={handleChange}>
            <Input disabled={!editmode} placeholder='Materia' name='materia' defaultValue={subject.materia}></Input>
            <Input disabled={!editmode} placeholder='Profesor' name='profesor' defaultValue={subject.profesor}></Input>
            <Input disabled={!editmode} placeholder='Horario' name='horario' defaultValue={subject.horario}></Input>
            <div className='flex flex-row items-center'>
                <IconButton onClick={handleDelete}>
                    Eliminar
                    <TrashIcon color='red' width={30} className='bg-red-200 rounded-full p-1' />
                </IconButton>
                {!editmode && (
                    <IconButton onClick={handleEdit}>
                        Editar
                        <PencilIcon color='red' width={30} className='bg-red-200 rounded-full p-1' />
                    </IconButton>
                )}
                {editmode && (
                    <>
                        <IconButton onClick={handleSave}>
                            Listo
                            <CheckIcon color='red' width={30} className='bg-red-200 rounded-full p-1' />
                        </IconButton>
                    </>
                )}
            </div>
            {editmode && (
                <div className='text-red-500'>
                    Los cambios se guardan de forma automática
                </div>
            )}
        </Paper>
    )
}

export const SubjectCards = ({ subjectsList }) => {
    const [subjects, setSubjects] = useState(subjectsList)
    const addItem = (item) => {
        setSubjects((subjects) => [...subjects, { materia: '', profesor: '', horario: '', id: `item-id:${subjects.length}` }])
    }
    const editItem = (id, newItem) => {
        setSubjects((subjects) => [...subjects.filter(e => e.id !== id), { ...newItem, id: id }])
    }
    const deleteItem = (id) => {
        console.log(`deleting item : ${id}`)
        setSubjects(subjects.filter(e => !(e.id === id)))
    }
    useEffect(() => {
        console.log(`Actual data`, subjects)
    }, [subjects])

    const manageState = { addItem, editItem, deleteItem }

    return (
        <Paper>
            <Paper className='flex flex-row items-center justify-center'>
                <Link href={'/replica'}>
                    <Button>Ejemplo anterior</Button>
                </Link>
                <IconButton onClick={addItem}>
                    Nuevo elemento en blanco
                    <FireIcon color='red' width={30} className='bg-red-200 rounded-full p-1' />
                </IconButton></Paper>
            <Paper className='grid grid-cols-2 gap-1'>
                {subjects.map((subject, i) => <SubjectCard key={i} state={manageState} defaultSubject={subject} />)}
            </Paper>
        </Paper>
    )
}
