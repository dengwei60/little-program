// component/serchinput.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  //子传父的方法是要通过事件来传递
  methods: {
    // 组件绑定一个方法,然后开始后将参数传递给父亲
    handelClick:function(e){
      console.log("点击事件发生了.向父亲传值")
      this.triggerEvent("myEvent",[123,456])
      //传入的参数,第一个是事件名(父亲的绑定的事件的后缀名例如:bind:myEvent,要传的参数通过子会传到里面的参数)
    }
  }
})
