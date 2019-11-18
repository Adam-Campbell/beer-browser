import { TruncateWithEllipsisPipe } from './truncate-with-ellipsis.pipe';

describe('TruncateWithEllipsisPipe', () => {
  
  const str = 'Lorem ipsum dolor sit amet consectetur adipiscing elit.';
  let pipe: TruncateWithEllipsisPipe;

  beforeEach(() => {
    pipe = new TruncateWithEllipsisPipe();
  });

  afterEach(() => {
    pipe = null;
  });

  it("returns the entire value if it's length does not exceed limit", () => {
    expect(pipe.transform(str, 100)).toBe(str);
  });

  it("truncates the value and adds ellipsis if the length does exceed limit", () => {
    expect(pipe.transform(str, 28)).toBe('Lorem ipsum dolor sit amet...');
  });
  it("shortens the truncated portion as required to avoid splitting a word apart", () => {
    expect(pipe.transform(str, 26)).toBe('Lorem ipsum dolor sit...');
    expect(pipe.transform(str, 26)).not.toBe('Lorem ipsum dolor sit am...')
  });

});
