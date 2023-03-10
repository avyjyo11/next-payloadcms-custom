export const sample = {
  layout: [
    {
      blockType: 'content',
      blockName: 'Page Content',
      content: [
        {
          children: [
            {
              text: 'This is a sample page. Blah blah blah.',
            },
          ],
          type: 'h3',
        },
        {
          children: [
            {
              text: '',
            },
            {
              type: 'link',
              url: '/',
              newTab: false,
              children: [
                {
                  text: 'Go back home',
                },
              ],
            },
            {
              text: '',
            },
          ],
          type: 'p',
        },
      ],
    },
  ],
  title: 'Sample Page',
  slug: 'sample-page',
};
