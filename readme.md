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
