import { useSelector } from 'react-redux';
import { fetchLastQuestions } from '@services/api';
import { RootState } from '@stores/store';
import { useEffect } from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
export function LastQuestions() {
  const dispatch = useAppDispatch();
  const { questions, loading, error } = useSelector(
    (state: RootState) => state.questions,
  );

  useEffect(() => {
    dispatch(
      fetchLastQuestions({order: 'id desc', offset: '0'}),
    );
  }, [dispatch]);

  return (
    <div className="h-screen flex-col flex items-center justify-center">
      <h1 className="text-xl">Últimas Perguntas</h1>
      {loading && <p>Carregando...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && questions.length === 0 && (
        <p>Não há perguntas disponíveis.</p>
      )}
      <div className="mt-4 space-y-4">
        {questions.map((question) => (
          <div key={question.id} className="p-4 border rounded shadow">
            <h2 className="text-lg font-bold">{question.title}</h2>
            <p>{question.body}</p>
            {/* <div className="text-sm text-gray-500">
              Por {question.author} | {question.date}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
