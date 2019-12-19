# dzh-react-sticky
React中固钉(粘性布局)组件实现

### Prop Types

| Property      | Type   | Required? | Description                  |
| ------------- | ------ | --------- | ---------------------------- |
| contentHeight | Number | ✓         | 被固钉组件包裹起来的内容高度 |

### How To Use

```react
import React, { Component } from 'react'
import { Sticky } from 'dzh-react-sticky'

class Example extends Component {
    render()(
      return <div>
        ...
        <Sticky contentHeight={40}>
        	{% 被固钉组件包裹起来的子组件 %}
        	<Filter />
        </Sticky>
        ...
      </div>
    )
}
```

### License

*dzh-react-sticky* is available under the MIT License.