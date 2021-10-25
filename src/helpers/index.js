import { MIN_REQUIRED_INCOME, STATUS_STUDENT, STATUS_ALL } from '../constants';

export const filter = ({ annualIncome, employmentStatus }, cards) => {
  const isStudent = employmentStatus === STATUS_STUDENT;
  const hasMinimumIncome = Number(annualIncome) >= MIN_REQUIRED_INCOME;

  // Mr. Ollie Murphree eligibility scenario
  if (!isStudent && hasMinimumIncome) {
    return cards.filter(({ status }) => status !== STATUS_STUDENT);
  }

  // Ms. Elizabeth Edmundson eligibility scenario
  if (isStudent && hasMinimumIncome) {
    return cards;
  }

  if (isStudent && !hasMinimumIncome) {
    return cards.filter(({ status }) => status === STATUS_STUDENT);
  }

  // Mr. Trevor Rieck eligibility scenario
  if (!isStudent && !hasMinimumIncome) {
    return cards.filter(({ status }) => status === STATUS_ALL);
  }

  return [];
};
