<style lang="scss">
  .form-create-wrap {
    $green: #4ca2ae;
    $grey: rgba(0,0,0,.5);
    position: relative;
    width: 80%;
    min-width: 400px;
    margin: 30px auto;
    @media (min-width: 520px) {
      width: 100%;
    }
    .wrap {
      width: 780px;
      min-height: 100px;
      margin: 0 auto;
      @media (max-width: 920px) {
        width: 100%;
      }
      display: flex;
      .content-wrap {
        flex: 1;
        background-color: #fff;
        box-shadow: 0 0 2px rgba(0,0,0,.12), 0 2px 4px rgba(0,0,0,.1);
        margin-right: 10px;
      }
      .form-sidebar {
        flex: 1;
        flex-grow: 0;
        align-self: flex-end;
        display: inline-block;
        background-color: #fff;
        box-shadow: 0 0 2px rgba(0,0,0,.12), 0 2px 4px rgba(0,0,0,.24);
        .sidebar-li {
          cursor: pointer;
          padding: 10px 12px;
        }
      }
    }
    .item {
      padding: 16px 24px 24px 42px;
      .li-right {
        text-align: right;
      }
      .li-left {
        text-align: left;
        .q-select {
          display: inline-block;
          width: 120px;
        }
      }
    }
    .title-focus {
      border-left-color: $green !important;
    }
    .title {
      border-left: 3px solid transparent;
      position: relative;
      .add-list {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #e9e9e9;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -15px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        i {
          color: $green;
          font-size: 22px;
        }
      }
    }
    .q-wrap {
      .q-li-focus {
        border-left-color: $green !important;
        box-shadow: 0 -2px 2px 0 rgba(0,0,0,0.2), 0 2px 6px 0 rgba(0,0,0,0.24);
      }
      .q-li {
        border-left: 3px solid transparent;
      }
      .q-title-wrap {
        display: flex;
        align-items: center;
        margin-bottom: 25px !important;
        .q-index {
          flex: 1;
          flex-grow: 0;
          margin-right: 10px;
        }
        .q-title {
          flex: 1;
          flex-grow: 2;
          .li {
            margin-bottom: 0;
          }
        }
        .q-select {
          flex: 1;
          flex-shrink: 0;
        }
      }
      .drap-area {
        padding: 5px;
        cursor: move;
        .icon-tuozhuai {
          color: lightgray;
          font-size: 20px;
          margin-left: 37px;
        }
      }
      .q-item-wrap {
        padding:  16px 24px 24px 42px;
      }
      .q-item {
        margin-bottom: 10px;
        /*overflow: hidden;*/
        .q-radio {
          margin: 15px auto;
          display: flex;
          align-items: center;
          .icon-radio {
            width: 15px;
            height: 15px;
            border: 2px solid transparent;
            margin-right: 15px;
          }
          .icon-cirle {
            border: 2px solid lightgray;
            border-radius: 50%;
          }
          .icon-square {
            border: 2px solid lightgray;
            border-radius: 0;
          }
          input {
            flex: 2;
            margin-right: 15px;
            border: 1px solid transparent;
            padding-bottom: 3px;
            &:focus {
              border-bottom: 1px solid lightgray;
            }
          }
          i {
            flex: 1;
            flex-grow: 0;
            color: rgba(0,0,0,0.3);
            cursor: pointer;
          }
          .radio-add {
            color: $green;
            font-weight: bold;
            cursor: pointer;
            flex: 0;
          }
        }
      }
      .line-wrap {
        .q-item-line {
          display: flex;
          align-items: center;
          .el-select {
            width: 70px;
            .el-input {
              border: none !important;
            }
          }
          .line-tip {
            padding: 15px;
          }
        }
        .q-radio {
          input {
            border-bottom: 1px solid lightgray !important;
            flex: 0;
          }
        }
      }
      .text-wrap {
        color: $grey;
        border-bottom: 1px dotted lightgray;
        padding-bottom: 5px;
        width: 60%;
        text-align: left;
      }
      .square-wrap {
        display: flex;
        .square-li {
          flex: 1
        }
      }
      .option-wrap {
        overflow: hidden;
        border-top: 1px solid lightgray;
        .option-list {
          float: right;
          li {
            float: left;
            list-style: none;
            margin: 20px 0 0 25px;
            .icon-copy {
              font-size: 20px;
            }
            .el-icon-delete {
              font-size: 21px;
              vertical-align: middle;
            }
            i {
              cursor: pointer;
            }
          }
          .lang-li {
            margin: 15px 8px;
            display: flex;
            align-items: center;
            span {
              margin-left: 10px;
              cursor: pointer;
              color: $green;
              font-weight: bold;
            }
            .el-select {
              width: 120px;
            }
          }
        }
      }
      .lang-wrap {
        border-top: 1px dotted lightgray;
        padding-top: 20px;
        .lang-li-wrap {
          display: flex;
          .li-text {
            margin-right: 15px;
            i {
              display: block;
              margin-top: 20px;
              cursor: pointer;
            }
            .el-icon-delete {
              font-size: 21px;
            }
          }
          .li-content {
            flex: 1;
          }
        }
      }
    }
    .li {
      position: relative;
      margin-bottom: 15px;
      height: 100%;
      &:after {
        content: '';
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: -1px;
        left: 0;
        transform: scaleX(0);
        background-color: $green;
        transition-duration: 0.3s;
        transition-timing-function: ease;
        transition-delay: 0s;
      }
      &:hover:after {
        border-bottom: 1px solid transparent;
        transform: scaleX(1);
      }
      .form-title {
        font-size: 24px;
        &::-webkit-input-placeholder {
          font-size: 24px;
        }
      }
      .title-area {
        font-size: 20px;
        &::-webkit-input-placeholder {
          font-size: 20px;
        }
      }
      .q-area {
        font-size: 18px;
        &::-webkit-input-placeholder {
          font-size: 18px;
        }
      }
    }
    textarea {
      background-color: transparent;
      border: none;
      resize: none;
      display: block;
      width: 100%;
      height: 35px;
    }
    .expand-area {
      position: relative;
      textarea {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        overflow: hidden;
      }
      pre {
        display: block;
        visibility: hidden;
        min-height: 100px;
        margin: 0;
      }
    }
    .add-lang {
      .li-item {
        display: flex;
        align-items: center;
        .label {
          margin-right: 15px;
        }
      }
    }
    input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
      color: $grey;
    }
    .el-tabs__item.is-active, .el-tabs__new-tab:hover {
      color: $green;
    }
  }
</style>
<template>
  <div class="form-create-wrap">
    <loading :loading="loading"></loading>
    <div class="wrap" v-if="!loading">
      <div class="content-wrap">
        <div class="item title" @click="focusTitle($event)" :class="{'title-focus': focusIndex === 'title'}">
          <div class="li">
            <textarea class="form-title" placeholder="表单标题" v-model="data.display_name" @focus="$autoText($event)" @input="$autoText($event)"></textarea>
          </div>
          <el-tabs v-model="tabLang" type="card" editable @edit="handleTabsEdit">
            <el-tab-pane
              v-for="item in editableTabs"
              :key="item"
              :label="item"
              :name="item">
            </el-tab-pane>
          </el-tabs>
          <div class="li" v-for="i in data.name" v-if="i.language === langCode[langList.indexOf(tabLang)]">
            <textarea class="title-area" placeholder="问卷标题" v-model="i.questionnaire_name" @focus="$autoText($event)" @input="$autoText($event)"></textarea>
          </div>
          <div class="li" v-for="i in data.name" v-if="i.language === langCode[langList.indexOf(tabLang)]">
            <textarea placeholder="问卷说明" v-model="i.desc" @focus="$autoText($event)" @input="$autoText($event)"></textarea>
          </div>
          <div class="li-right">
            <span>允许重复提交</span>
            <el-switch :width="40" on-color="#4ca2ae" v-model="data.repeat_submit" on-text="" off-text="">
            </el-switch>
          </div>
          <div class="add-list" @click="addListFn" v-if="!data.question.length">
            <i class="el-icon-plus"></i>
          </div>
        </div>
        <div class="q-wrap">
          <draggable v-for="data, index in data.question" :key="index" v-model="data.question" :options="{group:'people'}" :move="onMove" @start="drag=true" @end="onEnd">
            <div class="q-li" :class="{'q-li-focus': focusIndex === index}" id="items" @click="focusItem($event, index)">
              <div class="drap-area">
                <i class="iconfont icon-tuozhuai"></i>
              </div>
              <div class="q-item-wrap" v-for="content, index1 in data.content" v-if="content.language === langCode[langList.indexOf(tabLang)]">
                <div class="q-item q-title-wrap">
                  <div class="q-title">
                    <div class="li">
                      <textarea class="q-area" placeholder="问题" v-model="content.title" @focus="$autoText($event)" @input="$autoText($event)"></textarea>
                    </div>
                  </div>
                  <el-select class="q-select" v-if="focusIndex === index" v-model="data.types" filterable placeholder="请选择">
                    <el-option
                      v-for="item in selectOptions"
                      :key="item"
                      :label="item"
                      :value="item">
                    </el-option>
                  </el-select>
                </div>
                <div class="q-item" v-if="data.types === '下拉列表' || data.types === '单选题' || data.types === '多选题' || data.types === '优先级'">
                  <div class="q-radio" v-for="item, i in content.answer">
                    <div class="icon-radio" v-if="data.types === '下拉列表' || data.types === '优先级'">{{i + 1}}.</div>
                    <div v-else class="icon-radio" :class="{'icon-cirle': data.types === '单选题', 'icon-square': data.types === '多选题'}"></div>
                    <input class="radio-input" v-model="item.description">
                    <i class="el-icon-close" v-if="focusIndex === index" @click="deleteRadioFn(index, index1, i)"></i>
                  </div>
                  <div class="q-radio" v-if="focusIndex === index">
                    <div class="icon-radio" v-if="data.types === '下拉列表' || data.types === '优先级'">{{content.answer.length + 1}}.</div>
                    <div v-else class="icon-radio" :class="{'icon-cirle': data.types === '单选题', 'icon-square': data.types === '多选题'}"></div>
                    <input class="radio-add" v-model="addRadio" @focus="addRadioFn(index, index1)">
                  </div>
                </div>
                <div class="q-item line-wrap" v-if="data.types === '线性量表'">
                  <div class="q-item-line">
                    <el-select v-model="content.line_answer.line_value">
                      <el-option
                        v-for="i in lineOptions"
                        :key="i"
                        :value="i">
                      </el-option>
                    </el-select>
                    <span class="line-tip">到</span>
                    <el-select v-model="content.line_answer.line_end_value">
                      <el-option
                        v-for="i in lineEndOptions"
                        :key="i"
                        :value="i">
                      </el-option>
                    </el-select>
                  </div>
                  <div class="q-radio">
                    <div class="icon-radio">1.</div>
                    <input class="radio-input" v-model="content.line_answer.line_tag" placeholder="标签（选填）">
                  </div>
                  <div class="q-radio">
                    <div class="icon-radio">2.</div>
                    <input class="radio-input" v-model="content.line_answer.line_end_tag" placeholder="标签（选填）">
                  </div>
                </div>
                <div class="q-item text-wrap" v-if="data.types === '文本题'">文本回答</div>
                <div class="q-item line-wrap square-wrap" v-if="data.types === '矩阵量表'">
                  <div class="square-li">
                    <h4>行</h4>
                    <div class="q-item-line">
                      <el-select v-model="content.line_answer.line_value">
                        <el-option
                          v-for="i in lineOptions"
                          :key="i"
                          :value="i">
                        </el-option>
                      </el-select>
                      <span class="line-tip">到</span>
                      <el-select v-model="content.line_answer.line_end_value">
                        <el-option
                          v-for="i in lineEndOptions"
                          :key="i"
                          :value="i">
                        </el-option>
                      </el-select>
                    </div>
                    <div class="q-radio">
                      <div class="icon-radio">1.</div>
                      <input class="radio-input" v-model="content.line_answer.line_tag" placeholder="标签（选填）">
                    </div>
                    <div class="q-radio">
                      <div class="icon-radio">2.</div>
                      <input class="radio-input" v-model="content.line_answer.line_end_tag" placeholder="标签（选填）">
                    </div>
                  </div>
                  <div class="square-li">
                    <h4>列</h4>
                    <div class="q-radio" v-for="item, i in content.answer">
                      <div class="icon-radio">{{i + 1}}.</div>
                      <input class="radio-input" v-model="item.description">
                      <i class="el-icon-close" v-if="focusIndex === index" @click="deleteRadioFn(index, index1, i)"></i>
                    </div>
                    <div class="q-radio" v-if="focusIndex === index">
                      <div class="icon-radio">{{content.answer.length + 1}}.</div>
                      <input class="radio-add" v-model="addRadio" @focus="addRadioFn(index, index1)">
                    </div>
                  </div>
                </div>
                <div class="q-item option-wrap" v-if="focusIndex === index">
                  <ul class="option-list">
                    <li>
                      <i class="iconfont icon-copy" @click="copyListFn(index)"></i>
                    </li>
                    <li>
                      <i class="el-icon-delete" @click="deleteListFn(index)"></i>
                    </li>
                    <li>
                      <span>必填</span>
                      <el-switch :width="40" on-color="#4ca2ae" v-model="data.is_required" on-text="" off-text="">
                      </el-switch>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </draggable>
        </div>
      </div>
      <div class="form-sidebar" v-if="data.question.length">
        <div class="sidebar-li" @click="addListFn">
          <i class="el-icon-plus"></i>
        </div>
      </div>
    </div>
    <div class="form-save" @click="saveFn" v-if="!loading">保存</div>
    <el-dialog class="add-lang" title="添加语言" :visible.sync="addLangVisible" :close-on-click-modal="false" top="34%">
      <div class="li-item">
        <span class="label">选择语言</span>
        <el-select class="q-select" v-model="defaultLang" filterable placeholder="请选择">
          <el-option
            v-for="item in langList"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addLangVisible = false">取 消</el-button>
        <el-button type="primary" @click=addLangFn>确 定</el-button>
      </div>
    </el-dialog>
    </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import loading from '@/components/loading.vue'

  let lineEndOptions = Array.apply(null, Array(9)).map((item, i) => {
    return i + 2
  })

  let that
  export default {
    data () {
      that = this
      return {
        auth: false,
        loading: false,
        selectOptions: ['单选题', '多选题', '下拉列表', '线性量表', '矩阵量表', '优先级', '文本题'],
        langCode: ['cn', 'en', 'kr', 'jp', 'fr', 'de', 'ru', 'sp', 'po', 'it', 'nl', 'id', 'tr', 'thai', 'zh', 'fa', 'ro', 'ar'],
        langList: ['中文', '英语', '韩语', '日语', '法语', '德语', '俄语', '西班牙语', '葡萄牙语', '意大利语',
          '荷兰语', '印度语', '土耳其语', '泰语', '繁体中文', '波斯语', '罗马尼亚语', '阿拉伯语'],
        defaultLang: '英语',
        tabLang: '中文',
        editableTabs: ['中文'],
        addLangVisible: false,
        defaultOption: '单选题',
        addRadio: '添加选项',
        lineOptions: [0, 1],
        lineEndOptions: lineEndOptions,
        langArray: [],
        data: {
          display_name: '',
          name: [{
            questionnaire_name: '',
            desc: '',
            language: 'cn'
          }],
          repeat_submit: false,
          question: [{
            question_id: 1,
            types: '单选题',
            is_required: false,
            content: [
              {
                language: 'cn',
                title: '',
                answer: [{
                  answer_id: 1,
                  description: '选项1'
                }],
                line_answer: {
                  line_value: 1,
                  line_end_value: 5,
                  line_tag: '',
                  line_end_tag: ''
                },
                text_answer: ''
              }
            ]}
          ]
        },
        editable: true,
        focusIndex: 0
      }
    },
    components: {
      draggable,
      loading
    },
    methods: {
      onEnd () {
        that.drag = false
      },
      onMove ({relatedContext, draggedContext}) {
        let relatedIndex = relatedContext.index
        let index = draggedContext.index
        relatedContext.element.question_id = index + 1
        draggedContext.element.question_id = relatedIndex + 1
      },
      focusTitle (event) {
        let classList = event.target.classList
        if (classList.contains('add-list') || classList.contains('el-icon-plus')) return
        that.focusIndex = 'title'
      },
      focusItem (event, i) {
        let classList = event.target.classList
        if (classList.contains('el-icon-delete') || classList.contains('icon-copy') || that.focusIndex === i) return
        that.focusIndex = i
      },
      addRadioFn (i, j) {
        let list = that.data.question[i].content[j].answer
        that.addFormFn(list)
      },
      deleteRadioFn (i, j, k) {
        that.data.question[i].content[j].answer.splice(k, 1)
      },
      addFormFn (list) {
        let index = list.length ? parseInt(list[list.length - 1].description.substr(2)) + 1 : '1'
        let text = index ? '选项' + index : '选项1'
        list.push({answer_id: list.length + 1, description: text})
        that.$nextTick(() => {
          let input = document.querySelectorAll('.radio-input')
          input[input.length - 1].focus()
        })
      },
      copyListFn (index) {
        let data = JSON.parse(JSON.stringify(that.data.question[index]))
        that.data.question.splice(index, 0, data)
        that.focusIndex = that.data.question.length - 1
      },
      addListFn () {
        let codeList = that.editableTabs.map((i) => {
          return that.langCode[that.langList.indexOf(i)]
        })
        let contentList = codeList.map((i) => {
          return {
            language: i,
            title: '',
            answer: [{
              answer_id: 1,
              description: '选项1'
            }],
            line_answer: {
              line_value: 1,
              line_end_value: 5,
              line_tag: '',
              line_end_tag: ''
            },
            text_answer: ''
          }
        })
        let list = {
          question_id: that.data.question.length + 1,
          types: '单选题',
          is_required: false,
          content: contentList
        }
        that.data.question.push(list)
        that.focusIndex = that.data.question.length - 1
      },
      deleteListFn (i) {
        that.data.question.splice(i, 1)
        that.focusIndex = i === 0 && that.data.question.length > 0 ? i : i - 1
      },
      saveFn () {
      },
      addLangFn () {
        let value = that.defaultLang
        if (that.editableTabs.indexOf(value) > -1) {
          this.$message({
            type: 'warning',
            message: '语言：' + value + '已经添加过了，请检查一下哦！'
          })
        } else {
          that.editableTabs.push(value)
          that.tabLang = value
          that.addLangDataFn(value)
        }
        that.addLangVisible = false
      },
      addLangDataFn (value) {
        let code = that.langCode[that.langList.indexOf(value)]
        that.data.question.map((i) => {
          let li = {
            language: code,
            title: '',
            answer: [{
              answer_id: 1,
              description: '选项1'
            }],
            line_answer: {
              line_value: 1,
              line_end_value: 5,
              line_tag: '',
              line_end_tag: ''
            },
            text_answer: ''
          }
          i.content.push(li)
          return i
        })
        that.data.name.push({
          questionnaire_name: '',
          desc: '',
          language: code
        })
      },
      handleTabsEdit (targetName, action) {
        if (action === 'add') {
          that.addLangVisible = true
        }
        if (action === 'remove') {
          that.$confirm('确定删除语言: ' + targetName + '的问卷吗？', {
            title: ' ',
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            closeOnClickModal: false,
            beforeClose: (action, instance, done) => {
              let closeFn = () => {
                instance.confirmButtonLoading = false
                instance.confirmButtonText = '确定'
              }
              if (action === 'confirm') {
                let tabs = that.editableTabs
                let activeName = that.tabLang
                if (activeName === targetName) {
                  tabs.forEach((tab, index) => {
                    if (tab === targetName) {
                      let nextTab = tabs[index + 1] || tabs[index - 1]
                      if (nextTab) {
                        activeName = nextTab
                      }
                    }
                  })
                }
                that.tabLang = activeName
                that.editableTabs = tabs.filter(tab => tab !== targetName)
                closeFn()
                done()
              } else {
                closeFn()
                done()
              }
            }
          }).then(() => {
          }).catch(() => {
          })
        }
      }
    }
  }
</script>
