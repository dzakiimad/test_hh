'use client'

import Table from './table';
import { secondsToDhms } from '@/function/timeConvert';
import ModalActivity from './modal_activity';

export default function Content({dataActivity, dataProject, fetchDataActivity}) {

  return (
    <>
      <div className="flex flex-col w-full pt-8 space-y-4 px-24 bg-backgroundPage">
        <div className="card bg-white px-8 py-8 flex flex-row space-x-12">
          <div>
            <h1 className='text-md'>Nama Karyawan:</h1>
            <h1 className='text-lg'>{dataActivity?.user?.name}</h1>
          </div>
          <div>
            <h1 className='text-md'>Rate Perjam:</h1>
            <h1 className='text-lg'>Rp{Number(dataActivity?.user?.rate_perjam || 0).toLocaleString('id')}/jam</h1>
          </div>
        </div>

        <div className='card bg-base-300  px-12 py-8 bg-white'>
          <div className="flex space-x-4 items-baseline mb-8">
            <h1 className='font-bold text-xl'>Daftar Kegiatan</h1>
            <button className="btn bg-lightBlue border-blue text-blue hover:text-white hover:bg-blue" onClick={() => document.getElementById('my_modal_1').showModal()}>Tambah Kegiatan</button>
            <dialog id="my_modal_1" className="modal">
              <ModalActivity fetchDataActivity={fetchDataActivity} dataProject={dataProject} edit={"false"} />
            </dialog>
          </div>
          <Table dataActivity={dataActivity?.activities} fetchDataActivity={fetchDataActivity} dataProject={dataProject}/>
          <div className="mt-8">
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

  )
}