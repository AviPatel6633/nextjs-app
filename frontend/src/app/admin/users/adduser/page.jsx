"use client"
import React from 'react'
import Breadcrumb from '@/components/admin/breadcrumb/breadcrumb'
const AddUsers = () => {
  return (
    <div>
      <Breadcrumb 
        middletitle1='Users'
        middletitle1_url='/admin/users'
        title='Add Users'
      />
      <div className='card'>Add Users</div>
    </div>
  )
}

export default AddUsers