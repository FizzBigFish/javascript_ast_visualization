分析一个bundle

通过标注来拆分文件，生成sourcemap

//* #name
//* ##name

通过名字前缀来

通过标注来标记块的属性，指定辅助标记方式


加入反构建webpack的逻辑:
拆包生成modulemap,
反射重命名 module define require

##　生成sourceMap的方法

//
// 这里不追求完全保持原来的压缩后的代码的结构
//

修改前后ast结构应当保持不变，否则无法完成映射。
解析webpack的文件为一个模块信息，
包含导出信息，子模块列表，子模块依赖关系，
每个子模块包含序列号和名字，ast，以及可编辑的代码，
编辑代码完成反射.
生成代码时可以使用magic-string来拼接生成代码和sourcemap


http://www.puremango.co.uk/jsast/ast.html