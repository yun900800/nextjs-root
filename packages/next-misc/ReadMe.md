# 免费的图片网站

1. <https://unsplash.com/>

2. Image会缓存图片,从而减小图片的大小;延迟加载

3. tsconfig.json似乎会优先于jsconfig.json;在jsconfig中配置的路径不起效;放到tsconfig后就起作用啦

4. nextjs preview mode有啥作用?请求中带上cookie参数,设置转发参数的值

5. nextjs配置storybook的过程如下:<https://www.npmjs.com/package/@storybook/nextjs#documentation>

6. 写出优秀的react组件的一些原则:
    - 组件最好使用命名组件而不是匿名组件.
    - 组件的编码风格最好组织成一致,要么统一成函数组件或者lamda组件,也可以用类组件
    - 将常量和工具类放置在不同的文件中
    - 架构参数props成具体的值,而不是直接使用props

    ```javascript
        // Don't repeat props everywhere :(
        const Input = (props) => {
        return <input value={props.value} onChange={props.onChange}/>
        }

        // Destructure and use the straight values :)
        const Input = ({value, onChange}) => (
        <input value={value} onChange={onChange} />
        )

    ```

    - 不要传递太多的属性(props)
    - 避免嵌套渲染函数

    ```javascript
        // Don't write nested render functions
        const Navbar = () => {
        
        const NavbarButton = () => {
            return <button>...</button>
        }
        
        return <div>{NavbarButton()}</div>
        }

        // Extract to its own component
        import NavbarButton from '../components/NavbarButton'

        const Navbar = () => {
            return <div> <NavbarButton/> </div>
        }
    ```

    - 条件渲染也是一个不错的选择,比如

    ```javascript
        // Short circuit operator
        const Counter = ({count}) => {
        return <div>
            {count && <h1>Count: {count}</h1>}
        </div>
        }
    ```

    - 解构的时候赋值属性一个默认值,举例

    ```javascript
        // Don't define the default props outside of the function

        const Component = ({ title, subtitle, text}) => {
            return <div>..</div>
        }

        Component.defaultProps = {
            title: 'Default Title',
            subtitle: 'Generic Subtitle',
            text: ''
        }

        // Put default props inside of the destructuring statement

        const Component = ({
            title: 'Default Title',
            subtitle: 'Generic Subtitle',
            text: '',
        }) => {
        return <div>...</div>
        }
    ```

    - 属性传值的时候优先传递对象
    - 将list迭代过程放置到一个新的组件

    ```javascript
        // Don't write lops with the rest of the code
        const Component = ({title, cards}) => {
        return <div>
            <h1>{title}</h1>
            {
            cards.map(({title: cardTitle, subtitle, image}) => ({
                <div>
                <h3>{cardTitle}</h3>
                <h5>{subtitle}</h5>
                <img src={image} />
                </div>
            }))
            }
        </div>
        }

        // Break it up into a separate list component
        const Component = ({title, cards}) => {
        return <div>
            <h1>{title}</h1>
            <CardsList cards={cards} />
        </div>
        }
    ```

7. 设计组件的时候优先考虑三点:
    - Use functional components: Functional components are more lightweight and easier to test than class components. They’re also more likely to be compatible with future React updates.
    - Break components into smaller parts: Break down your components into smaller, reusable parts that can be composed together to create more complex components.
    - Keep state separate from UI logic: Avoid mixing state management with UI logic in your components. Instead, use a separate state management library like Redux.

8. react的组件的props和state怎么区分和使用
    - Use props for static data: Use props to pass data from parent components to child components. Props should be used for data that doesn’t change during the component’s lifecycle.
    - Use state for dynamic data: Use state to manage data that changes during the component’s lifecycle. This could include data that’s generated from user interactions or fetched from an API.
    - Use container and presentational components: Container components manage data and state, while presentational components focus on rendering the UI. By separating these concerns, you can make your components more reusable and easier to test.
    - Pass data between components using props: Use props to pass data down the component hierarchy. This can help you create more flexible and maintainable components.

9. 如何做数据管理
    - Handle user input with controlled components: Use controlled components to handle user input. This can make your components more predictable and easier to test.
    - Fetch data from APIs with useEffect: Use the useEffect hook to fetch data from APIs. This can help you manage your component’s state and lifecycle more efficiently.
    - Use Redux for state management: If your application has complex data management requirements, consider using a state management library like Redux.

10. 如何做样式管理
    - Use CSS-in-JS libraries: CSS-in-JS libraries like styled-components can make it easier to style your components and create reusable styles.
    - Use CSS modules: CSS modules allow you to create component-level styles that don’t clash with styles from other components.
    - Create reusable styles: Create reusable styles that can be used across your application. This can help you create a consistent visual style and make your components more maintainable.

11. 可访问性最佳实践
    - Use ARIA attributes: Use ARIA attributes to provide more information to screen readers and other assistive technologies.
    - Provide text alternatives for images: Provide text alternatives for images to make your content accessible to visually impaired users.
    - Use semantic HTML: Use semantic HTML to create a clear structure for your content that’s easier to understand for all users.

12. 测试最佳实践
    - Write unit tests for components: Use libraries like Jest and Enzyme to write unit tests for your components. This can help you catch errors early and make your components more reliable.
    - Test props and state: Test that your components handle props and state correctly. This can help you catch bugs that might not be apparent in the UI.
    - Test user interactions: Test that your components handle user interactions correctly. This can help you ensure that your components are user-friendly and responsive.
