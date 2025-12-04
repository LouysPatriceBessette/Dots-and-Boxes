import React from 'react'

import {
  Box,
  CodeBlock,
  createHighlightJsAdapter,
  Collapsible,
} from '@chakra-ui/react'
import hljs from 'highlight.js/lib/core'

export const ChakraCode = (props) => {
  const { title, codeString, showLineNumbers, defaultExpanded } = props

  const highlightJsAdapter = createHighlightJsAdapter({
    async load() {
      const languages = {
        // eslint-disable-next-line quotes
        javascript: () => import("highlight.js/lib/languages/javascript"),
        // eslint-disable-next-line quotes
        js: () => import("highlight.js/lib/languages/javascript"),
        // eslint-disable-next-line quotes
        jsx: () => import("highlight.js/lib/languages/javascript"),
        // eslint-disable-next-line quotes
        html: () => import("highlight.js/lib/languages/xml"),
        // eslint-disable-next-line quotes
        txt: () => import("highlight.js/lib/languages/plaintext"),
      }
      await Promise.all(
        Object.entries(languages).map(async ([language, file]) => {
          const { default: langModule } = await file()
          hljs.registerLanguage(language, langModule)
        }),
      )
      return hljs
    },
  })

  return (
    <Box className='chakraContainer' mt='4'>
      <CodeBlock.AdapterProvider value={highlightJsAdapter}>
        <CodeBlock.Root
          code={codeString}
          language={codeString === '// Not implemented yet' ? 'txt' :'js'}
          meta={{ showLineNumbers }}
        >
          <Collapsible.Root defaultOpen={defaultExpanded}>
            <Collapsible.Trigger>
              <CodeBlock.Header width='100%'>
                <CodeBlock.Title>{title}</CodeBlock.Title>
              </CodeBlock.Header>
            </Collapsible.Trigger>

            <Collapsible.Content>
              <CodeBlock.Content>
                <CodeBlock.Code>
                  <CodeBlock.CodeText />
                </CodeBlock.Code>
              </CodeBlock.Content>
            </Collapsible.Content>
          </Collapsible.Root>
        </CodeBlock.Root>
      </CodeBlock.AdapterProvider>
    </Box>
  )
}