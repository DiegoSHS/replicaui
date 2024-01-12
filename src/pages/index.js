import { Inter } from 'next/font/google'
import Input, { Button, Paper, ReadMore } from '@/components/mytail'
import Link from 'next/link'
import Image from 'next/image'
import { BuildingOfficeIcon, MapPinIcon, RocketLaunchIcon, TruckIcon } from '@heroicons/react/24/outline'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <nav className='flex flex-row justify-between w-full bg-white py-3 px-5'>
        <div className='flex items-center gap-2'><TruckIcon width={30} color='red'></TruckIcon>Moving<p className='text-red-600 font-bold italic'>service</p></div>
        <Link href={'https://google.com'} className='font-bold hover:text-red-600'>(877)-555-66666</Link>
      </nav>
      <div
        style={{}} className={`flex flex-col`}
      >
        <div className='w-full bg-gradient-to-r from-gray-300 to-white'>
          <Image className='float-left' alt='women with boxes' src={'/women.png'} width={400} height={400} />
          <div className='w-1/3 mr-20 float-right m-2'>
            <div className='flex flex-col'>
              <text className='text-center text-4xl font-bold'>Simplify your moving day with {"NYC's"} 5 star mover</text>
              <text className='my-5 text-center font-bold'>Affordable, reliable & experienced</text>
            </div>
            <Paper className='flex flex-col items-center p-5 bg-white rounded-md shadow'>
              <Input placeholder='Your name' />
              <Input placeholder='example@email.com' />
              <Input placeholder='Your contact number' />
              <Button>Send message</Button>
            </Paper>
          </div>
        </div>
        <Paper className='flex flex-col items-center bg-gray-50'>
          <text className='text-xl font-bold p-2 m-2'>New York City Moving & Storage Services</text>
          <div className='grid gap-4 grid-cols-2 grid-rows-2 mx-10'>
            <Paper className='p-5 bg-white rounded-md shadow flex flex-col'>
              <text className='font-bold flex items-center gap-2'><MapPinIcon color='red' width={30} className='bg-red-200 rounded-full p-1'></MapPinIcon> Local Moving</text>
              <text>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</text>
              <ReadMore />
            </Paper>
            <Paper className='p-5 bg-white rounded-md shadow flex flex-col gap-1'>
              <text className='font-bold flex items-center gap-2'><RocketLaunchIcon color='red' width={30} className='bg-red-200 rounded-full p-1'></RocketLaunchIcon> Urgent moves</text>
              <text>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</text>
              <ReadMore />
            </Paper>
            <Paper className='p-5 bg-white rounded-md shadow flex flex-col gap-1'>
              <text className='font-bold flex items-center gap-2'><TruckIcon color='red' className='bg-red-200 rounded-full p-1' width={30}></TruckIcon>Long Distance Moves</text>
              <text>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</text>
              <ReadMore />
            </Paper>
            <Paper className='p-5 bg-white rounded-md shadow flex flex-col gap-1'>
              <text className='font-bold flex items-center gap-2'><BuildingOfficeIcon width={30} color='red' className='bg-red-200 rounded-full p-1'></BuildingOfficeIcon> Commercial & office</text>
              <text>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</text>
              <ReadMore />
            </Paper>
          </div>
        </Paper>
      </div>
    </>
  )
}
