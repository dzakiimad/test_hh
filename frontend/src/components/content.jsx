'use client'

import Table from './table';
import { secondsToDhms } from '@/function/timeConvert';
import ModalActivity from './modal_activity';
import Button from './button';

export default function Content({ dataActivity, dataProject, fetchDataActivity }) {

  return (
    <>
      <div className="flex flex-col h-full w-full py-8 space-y-4 px-24">
        <div className="card bg-white px-8 py-8 flex flex-row space-x-12">
          <div>
            <h1 className='text-md text-grey'>Nama Karyawan:</h1>
            <h1 className='text-lg text-grey'>{dataActivity?.user?.name}</h1>
          </div>
          <div>
            <h1 className='text-md text-grey'>Rate Perjam:</h1>
            <h1 className='text-lg text-grey'>Rp{Number(dataActivity?.user?.rate_perjam || 0).toLocaleString('id')}/jam</h1>
          </div>
        </div>

        <div className='flex gap-6 card bg-base-300  px-12 py-8 bg-white'>
          <div className="flex gap-4">
            <div className='flex items-center'>
              <h1 className=' flex font-bold text-xl text-grey'>Daftar Kegiatan</h1>
            </div>
            <div>
              <Button type="submit" color="bluee" text="Tambah Kegiatan" click={() => document.getElementById('my_modal_1').showModal()} >Tambah Kegiatan</Button>
            </div>
            <dialog id="my_modal_1" className="modal">
              <ModalActivity fetchDataActivity={fetchDataActivity} dataProject={dataProject} edit={"false"} />
            </dialog>
          </div>
          <Table dataActivity={dataActivity?.activities} fetchDataActivity={fetchDataActivity} dataProject={dataProject} />
          <div className="">
            <div className='flex justify-between'>
              <h1 className='font-bold text-md text-blue'>Total Durasi: </h1>
              <h1 className='font-bold text-md text-blue'>{secondsToDhms(dataActivity?.user?.totalDuration)}</h1>
            </div>
            <div className='flex justify-between'>
              <h1 className='font-bold text-lg text-blue'>Total Pendapatan:</h1>
              <h1 className='font-bold text-lg text-blue'><b>Rp {dataActivity?.user?.totalGain.toLocaleString('id')}</b></h1>
            </div>
          </div>
        </div>
      </div>
    </>
    // 
  )
}