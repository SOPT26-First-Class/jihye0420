USE Sopt;

SELECT * FROM post;

/-- post �������� ���� --/
SELECT COUNT(*) FROM post;

/-- post title�� �������� --/
SELECT title FROM post;

/-- �ƹ� ���̳� INSERT �غ��� --/
INSERT INTO post (author, title, content, createdAt) VALUES ('Minji', 'minji article', 'hihi this is content', '5/16/2020');

/-- postIdx�� 3�� ������ ��ȸ�ϱ� --/
SELECT * FROM post WHERE postIdx = 3;

/-- postIdx�� 2�� post ��ü���� ��� ����ϱ� --/
SELECT * FROM post WHERE postIdx = 2;

/-- postIdx�� 2�� ������ ��¥ ����� �����ϱ� --/
UPDATE post SET createdAt='5/16/2020' WHERE postIdx=2;

/-- postIdx�� 4�� ������ ����� --/
DELETE FROM post WHERE postIdx=4;