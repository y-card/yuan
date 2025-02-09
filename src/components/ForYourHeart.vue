<script setup lang="ts">
import TextCopy from "./atom/TextCopy.vue";
import Accounts from "./atom/Accounts.vue";

const props = defineProps({
  type: String,
});
</script>

<template>
  <div class="comment">
    저희 두 사람의 소중한 시작을<br />함께 해주시는 모든 분들께 감사드리며,<br />
    전해주시는 따뜻한 진심을 배워<br />오래도록 행복하게 잘 살겠습니다.
  </div>

  <Accounts class="m">
    <TextCopy :class="['text_copy', type]" copy-text="29106701301026">
      <slot>
        <div :class="['texts', type]">
          <p>신랑 <em>김기보</em></p>
          <p class="account">기업은행 291-067013-01-026</p>
        </div>
      </slot>
    </TextCopy>
    <TextCopy :class="['text_copy', type, 'second']" copy-text="50504451012494">
      <slot>
        <div :class="['texts', type]">
          <p>아버지 <em>김원배</em></p>
          <p class="account">농협은행 505044-51-012494</p>
        </div>
      </slot>
    </TextCopy>
  </Accounts>
  <Accounts class="w">
    <TextCopy :class="['text_copy', type]" copy-text="55991016307407">
      <slot>
        <div :class="['texts', type]">
          <p>신부 <em>백지수</em></p>
          <p class="account">하나은행 559-910163-07407</p>
        </div>
      </slot>
    </TextCopy>
    <TextCopy :class="['text_copy', type, 'second']" copy-text="45104456014140">
      <slot>
        <div :class="['texts', type]">
          <p>아버지 <em>백현명</em></p>
          <p class="account">농협은행 451044-56-014140</p>
        </div>
      </slot>
    </TextCopy>
  </Accounts>
</template>

<style scoped>
.divider {
  width: 100%;
  height: 1px;
  background-color: #ebebeb;
  margin-top: 10px;
}

.text_copy {
  font-size: 13px;
  padding: 0;
}
.text_copy em {
  font-weight: bold;
  font-style: normal;
}

.text_copy.second {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px dotted #ddd;
}

.comment {
  font-family: "Nanum Myeongjo", serif;
  text-align: center;
  margin: 47px auto 30px;
  font-size: 12px;
}

.texts {
  font-size: 15px;
  font-family: "NanumSquare", sans-serif;
}

.texts .account {
  font-size: 15px;
}

.accounts.w {
  margin-top: 14px;
}

.texts.default {
  font-size: 13px !important;
}

.texts.default .account {
  font-size: 13px !important;
}
</style>
