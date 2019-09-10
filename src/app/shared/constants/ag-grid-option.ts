export const columnDefs = [
    {
      headerName: '',
      field: 'checkbox',
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      width: 38,
      resizable: false
    },
    {
      headerName: '',
      field: 'thumbnails',
      cellRenderer: 'thumbnailsRenderer',
      width: 144
    },
    {
      headerName: 'Published on',
      field: 'publishedAt',
      cellRenderer: 'publishedOnRenderer',
      width: 200
    },
    {
      headerName: 'Video Title',
      field: 'title',
      cellRenderer: 'videoTitleRenderer',
      width: 620
    },
    {
      headerName: 'Description',
      field: 'description',
      cellRenderer: 'descriptionRenderer',
      width: 900
    }
];