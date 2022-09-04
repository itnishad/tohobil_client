import React from 'react'
import DataTable from 'react-data-table-component';

const WithdrawRequest = () => {
    const columns = [
        {
            name: 'Title',
            selector: (row:any) => row.title,
        },
        {
            name: 'Year',
            selector: (row:any) => row.year,
        },
    ];
    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]
  return (
    <div className="container-fluid pb-md-5 mb-5">
      <div className="row">
        <div className="col-12">
          <div className={`card px-3`}>
          {/* ${classes.customCard} */}
          <DataTable columns={columns} data={data} pagination />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WithdrawRequest