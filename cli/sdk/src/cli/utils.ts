import dedent from 'strip-indent'
import Arg from 'arg'

/**
 * format
 */
export function format(input: string = ''): string {
  return dedent(input).trimRight() + '\n'
}

/**
 * Wrap arg to return an error instead of throwing
 */
export function arg<T extends Arg.Spec>(
  argv: string[],
  spec: T,
  stopAtPositional: true | false = true,
): Arg.Result<T> | Error {
  try {
    return Arg(spec, { argv, stopAtPositional })
  } catch (err) {
    return err
  }
}

/**
 * Check if result is an error
 */
export function isError(result: any): result is Error {
  return result instanceof Error
}
