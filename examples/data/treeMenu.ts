export default [
  {
    id: 1,
    title: '菜单1',
  },
  {
    id: 2,
    title: '菜单2',
  },
  {
    id: 3,
    title: '菜单3',
    children: [
      {
        id: 31,
        title: '3-1',
      },
      {
        id: 32,
        title: '3-2',
      },
      {
        id: 33,
        title: '3-3',
      },
    ],
  },
  {
    id: 4,
    title: '菜单4',
    children: [
      {
        id: 41,
        title: '4-1',
      },
      {
        id: 42,
        title: '4-2',
        children: [
          {
            id: 421,
            title: '4-2-1',
          },
          {
            id: 422,
            title: '4-2-2',
          },
          {
            id: 423,
            title: '4-2-3',
          },
        ],
      },
      {
        id: 43,
        title: '4-3',
        children: [
          {
            id: 431,
            title: '4-3-1',
          },
          {
            id: 432,
            title: '4-3-2',
            children: [
              {
                id: 4321,
                title: '4-3-2-1',
              },
              {
                id: 4322,
                title: '4-3-2-2',
              },
              {
                id: 4323,
                title: '4-3-2-3',
                children: [
                  {
                    id: 43231,
                    title: '4-3-2-3-1',
                  },
                  {
                    id: 43232,
                    title: '4-3-2-3-2',
                  },
                  {
                    id: 43233,
                    title: '4-3-2-3-3',
                  },
                ],
              },
            ],
          },
          {
            id: 433,
            title: '4-3-3',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: '菜单5',
  },
]
