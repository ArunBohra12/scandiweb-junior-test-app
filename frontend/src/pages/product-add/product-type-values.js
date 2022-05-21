export const productTypeValuesList = {
  book: {
    title: 'Please provide weight in KG',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat qui nisi debitis quod, similique aperiam, enim totam laborum, alias perspiciatis reprehenderit eaque ducimus aut vel magnam provident error quos omnis libero illum quae fugiat.',
    inputs: [
      {
        key: 1,
        type: 'number',
        id: 'weight',
        label: 'Weight (KG)',
      },
    ],
  },
  dvd: {
    title: 'Please provide size in MB',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat qui nisi debitis quod, similique aperiam, enim totam laborum, alias perspiciatis reprehenderit eaque ducimus aut vel magnam provident error quos omnis libero illum quae fugiat.',
    inputs: [
      {
        key: 1,
        type: 'number',
        id: 'size',
        label: 'Size (MB)',
      },
    ],
  },
  furniture: {
    title: 'Please provide dimensions in HxWxL format',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat qui nisi debitis quod, similique aperiam, enim totam laborum, alias perspiciatis reprehenderit eaque ducimus aut vel magnam provident error quos omnis libero illum quae fugiat.',
    inputs: [
      {
        key: 1,
        type: 'number',
        id: 'height',
        label: 'Height (CM)',
      },
      {
        key: 2,
        type: 'number',
        id: 'width',
        label: 'Width (CM)',
      },
      {
        key: 3,
        type: 'number',
        id: 'length',
        label: 'Length (CM)',
      },
    ],
  },
};
