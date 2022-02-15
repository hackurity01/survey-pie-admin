import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: 1,
  title: '명절 선물 선호도 조사1',
  questions: [
    {
      title: '설날에 받고 싶은 선물은 무엇인가요? (최대 3개)',
      desc: '특별히 받고 싶은 선물이 없다면 선택하지 말고 넘어가세요.',
      type: 'select',
      required: true,
      options: {
        max: 3,
        items: ['식품', '전자기기', '도서', '의류', '돈'],
      },
    },
    {
      title: '추석에 받고 싶은 선물은 무엇인가요?',
      desc: '특별히 받고 싶은 선물이 없다면 입력하지 말고 넘어가세요.',
      type: 'text',
      required: false,
      options: {
        max: 10,
        placeholder: '10자 이내로 입력해주세요.',
      },
    },
    {
      title: '입력한 선물을 받고 싶은 이유가 무엇인가요? (필수)',
      desc: '',
      type: 'textarea',
      required: true,
      options: {
        max: 100,
        placeholder: '100자 이내로 입력해주세요.',
      },
    },
  ],
  createdAt: 1644755310499,
};

export const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    addQuestion: (state, action) => {
      const type = action.payload;

      let options = {};
      if (type === 'text' || type === 'textarea') {
        options = {
          max: 20,
          placeholder: '',
        };
      } else if (type === 'select') {
        options = {
          max: 1,
          items: ['가', '나', '다'],
        };
      }

      state.questions.push({
        title: 'Untitled',
        desc: '',
        type,
        required: false,
        options,
      });
    },
    moveUpQuestion: (state, action) => {
      const index = action.payload;

      const temp = state.questions[index];
      state.questions[index] = state.questions[index - 1];
      state.questions[index - 1] = temp;
    },
    moveDownQuestion: (state, action) => {
      const index = action.payload;

      const temp = state.questions[index];
      state.questions[index] = state.questions[index + 1];
      state.questions[index + 1] = temp;
    },
    deleteQuestion: (state, action) => {
      state.questions.splice(action.payload, 1);
    },
  },
});

export const {
  setTitle,
  addQuestion,
  moveUpQuestion,
  moveDownQuestion,
  deleteQuestion,
} = surveySlice.actions;

export default surveySlice.reducer;
