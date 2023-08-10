# 如何将原先已经git初始化的子项目重新添加到父项目中的git

1. 删除子项目中的.git文件夹下的所有东西

2. 进入子项目对象的目录，执行 git rm --cached

3. 在父项目执行 git add ;git commit ; git push 

4. 链接本地项目到git的方法

    - 1.首先在项目目录下初始化本地仓库

    git init

    - 2.添加所有文件( . 表示所有)

    git add .

    - 3.提交所有文件到本地仓库

    git commit -m "备注信息"

    - 4.连接到远程仓库

    git remote add origin 你的远程仓库地址

    - 5.将项目推送到远程仓库

    git push -u origin master


5. static genatation 存在的问题,build的时间随着页面的数目成比例的增长;页面一旦build完成，永远包含过时的数据，除非重新rebuild

6. 理解ISR的具体效果是解决什么问题?如何使用这个功能呢? ISR是一定需要有用户访问请求发生以后才会生成新的页面.

7. Static Genaration的缺点,
    - 1.在每次request的时候不能fetch data,
    - 2.不能访问请求数据(Incoming request)
    因此才有了SSR
8. getServerSideProps只在服务端运行,不能在客户端运行;任何服务端代码都可以运行在此函数中,比如访问文件和数据库等;
    此外APIkey啥的可以在此运行;不用担心泄露;这个函数只能运行在page文件中,不能运行在组件文件中;每次请求时候运行.

9. getServerSideProps的参数context可以访问req,res,params,query等

10. 给子项目添加依赖: yarn workspace nextjs-prerendering add swr
