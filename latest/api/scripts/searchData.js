pages = [{"l":"index.html","n":"aoc-N/A","t":"aoc-N/A","d":"","k":"static"},
{"l":"aoc/utils.html","n":"aoc.utils","t":"package aoc.utils","d":"aoc/utils","k":"package"},
{"l":"aoc/utils.html","n":"*","t":"def *(mat: Matrix[A])(implicit evidence$1: Numeric[A]): Vector[A]","d":"aoc/utils","k":"def"},
{"l":"aoc/utils.html","n":"*","t":"def *(other: Matrix[A])(implicit evidence$6: Numeric[A]): Matrix[A]","d":"aoc/utils","k":"def"},
{"l":"aoc/utils.html","n":"*","t":"def *(vec: Vector[A])(implicit evidence$7: Numeric[A]): Vector[A]","d":"aoc/utils","k":"def"},
{"l":"aoc/utils.html","n":"+","t":"def +(other: Matrix[A])(implicit evidence$4: Numeric[A]): Matrix[A]","d":"aoc/utils","k":"def"},
{"l":"aoc/utils.html","n":"-","t":"def -(other: Matrix[A])(implicit evidence$5: Numeric[A]): Matrix[A]","d":"aoc/utils","k":"def"},
{"l":"aoc/utils.html","n":"Cost","t":"type Cost = Double","d":"aoc/utils","k":"type"},
{"l":"aoc/utils.html","n":"average","t":"def average(implicit evidence$1: Numeric[A]): Double","d":"aoc/utils","k":"def"},
{"l":"aoc/utils.html","n":"cross","t":"def cross(ys: Vector[A])(implicit evidence$5: Numeric[A]): Vector[A]","d":"aoc/utils","k":"def"},
{"l":"aoc/utils.html","n":"debug","t":"def debug: A","d":"aoc/utils","k":"def"},
{"l":"aoc/utils.html","n":"debugAttr","t":"def debugAttr[B](f: A => B): A","d":"aoc/utils","k":"def"},
{"l":"aoc/utils.html","n":"debugClean","t":"def debugClean: A","d":"aoc/utils","k":"def"},
{"l":"aoc/utils.html","n":"determinant","t":"def determinant(implicit evidence$8: Numeric[A]): A","d":"aoc/utils","k":"def"},
{"l":"aoc/utils.html","n":"dot","t":"def dot(ys: Vector[A])(implicit evidence$4: Numeric[A]): A","d":"aoc/utils","k":"def"},
{"l":"aoc/utils.html","n":"finalize","t":"def finalize[B](f: A => A): A","d":"aoc/utils","k":"def"},
{"l":"aoc/utils.html","n":"finalizeCount","t":"def finalizeCount[B](f: A => A, count: Int): Counter[A]","d":"aoc/utils","k":"def"},
{"l":"aoc/utils.html","n":"flatten","t":"def flatten: Matrix[A]","d":"aoc/utils","k":"def"},
{"l":"aoc/utils.html","n":"iterate","t":"def iterate[B](n: Int)(f: A => A): A","d":"aoc/utils","k":"def"},
{"l":"aoc/utils.html","n":"log","t":"def log(color: String): A","d":"aoc/utils","k":"def"},
{"l":"aoc/utils.html","n":"magnitude","t":"def magnitude(implicit evidence$6: Numeric[A]): Double","d":"aoc/utils","k":"def"},
{"l":"aoc/utils.html","n":"median","t":"def median(implicit evidence$2: Numeric[A], ord: Ordering[A]): Double","d":"aoc/utils","k":"def"},
{"l":"aoc/utils.html","n":"normalized","t":"def normalized(implicit evidence$7: Numeric[A]): Vector[Double]","d":"aoc/utils","k":"def"},
{"l":"aoc/utils.html","n":"product","t":"def product(implicit evidence$3: Numeric[A]): A","d":"aoc/utils","k":"def"},
{"l":"aoc/utils.html","n":"sum","t":"def sum(implicit evidence$2: Numeric[A]): A","d":"aoc/utils","k":"def"},
{"l":"aoc/utils.html","n":"toMatrix","t":"def toMatrix: Matrix[A]","d":"aoc/utils","k":"def"},
{"l":"aoc/utils.html","n":"toPos3D","t":"def toPos3D(implicit evidence$3: Numeric[A]): Pos3D","d":"aoc/utils","k":"def"},
{"l":"aoc/utils.html","n":"warn","t":"def warn(f: A => Boolean): A","d":"aoc/utils","k":"def"},
{"l":"aoc/utils.html","n":"zipWith","t":"def zipWith[B, C](ys: IndexedSeq[B])(f: (A, B) => C): IndexedSeq[C]","d":"aoc/utils","k":"def"},
{"l":"aoc/utils/Cost$.html","n":"Cost","t":"object Cost","d":"aoc/utils/Cost$","k":"object"},
{"l":"aoc/utils/Cost$.html","n":"MaxValue","t":"def MaxValue: Cost","d":"aoc/utils/Cost$","k":"def"},
{"l":"aoc/utils/Counter.html","n":"Counter","t":"class Counter[A](value: A, count: Int)","d":"aoc/utils/Counter","k":"class"},
{"l":"aoc/utils/Edge.html","n":"Edge","t":"class Edge[N](from: N, to: N, cost: Cost)","d":"aoc/utils/Edge","k":"class"},
{"l":"aoc/utils/Index.html","n":"Index","t":"class Index(row: Int, col: Int)","d":"aoc/utils/Index","k":"class"},
{"l":"aoc/utils/Index.html","n":"down","t":"val down: Index","d":"aoc/utils/Index","k":"val"},
{"l":"aoc/utils/Index.html","n":"left","t":"val left: Index","d":"aoc/utils/Index","k":"val"},
{"l":"aoc/utils/Index.html","n":"ne","t":"val ne: Index","d":"aoc/utils/Index","k":"val"},
{"l":"aoc/utils/Index.html","n":"neighbors","t":"val neighbors: List[Index]","d":"aoc/utils/Index","k":"val"},
{"l":"aoc/utils/Index.html","n":"neighborsIn","t":"def neighborsIn[A](using mat: Matrix[A]): List[A]","d":"aoc/utils/Index","k":"def"},
{"l":"aoc/utils/Index.html","n":"neighborsOrthIn","t":"def neighborsOrthIn[A](using mat: Matrix[A]): List[A]","d":"aoc/utils/Index","k":"def"},
{"l":"aoc/utils/Index.html","n":"neighboursDiag","t":"val neighboursDiag: List[Index]","d":"aoc/utils/Index","k":"val"},
{"l":"aoc/utils/Index.html","n":"neighboursDiagIn","t":"def neighboursDiagIn[A](using mat: Matrix[A]): List[A]","d":"aoc/utils/Index","k":"def"},
{"l":"aoc/utils/Index.html","n":"neighboursOrth","t":"val neighboursOrth: List[Index]","d":"aoc/utils/Index","k":"val"},
{"l":"aoc/utils/Index.html","n":"nw","t":"val nw: Index","d":"aoc/utils/Index","k":"val"},
{"l":"aoc/utils/Index.html","n":"right","t":"val right: Index","d":"aoc/utils/Index","k":"val"},
{"l":"aoc/utils/Index.html","n":"se","t":"val se: Index","d":"aoc/utils/Index","k":"val"},
{"l":"aoc/utils/Index.html","n":"sw","t":"val sw: Index","d":"aoc/utils/Index","k":"val"},
{"l":"aoc/utils/Index.html","n":"up","t":"val up: Index","d":"aoc/utils/Index","k":"val"},
{"l":"aoc/utils/Line.html","n":"Line","t":"class Line(start: Pos, end: Pos)","d":"aoc/utils/Line","k":"class"},
{"l":"aoc/utils/Line3D.html","n":"Line3D","t":"class Line3D(start: Pos3D, end: Pos3D)","d":"aoc/utils/Line3D","k":"class"},
{"l":"aoc/utils/Matrix.html","n":"Matrix","t":"class Matrix[A](input: Vector[Vector[A]])","d":"aoc/utils/Matrix","k":"class"},
{"l":"aoc/utils/Matrix.html","n":"appendedBottom","t":"def appendedBottom(other: Matrix[A]): Matrix[A]","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"appendedLeft","t":"def appendedLeft(other: Matrix[A]): Matrix[A]","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"appendedRight","t":"def appendedRight(other: Matrix[A]): Matrix[A]","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"appendedTop","t":"def appendedTop(other: Matrix[A]): Matrix[A]","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"apply","t":"def apply(row: Int, col: Int): A","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"apply","t":"def apply(index: Index): A","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"col","t":"def col(col: Int): Vector[A]","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"cols","t":"def cols: Vector[Vector[A]]","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"count","t":"def count(f: A => Boolean): Int","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"dropCol","t":"def dropCol(col: Int): Matrix[A]","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"dropRow","t":"def dropRow(row: Int): Matrix[A]","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"exists","t":"def exists(f: A => Boolean): Boolean","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"filterCol","t":"def filterCol(f: Vector[A] => Boolean): Matrix[A]","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"filterRow","t":"def filterRow(f: Vector[A] => Boolean): Matrix[A]","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"flipCols","t":"def flipCols: Matrix[A]","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"flipRows","t":"def flipRows: Matrix[A]","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"forEach","t":"def forEach(f: A => Unit): Unit","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"forall","t":"def forall(f: A => Boolean): Boolean","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"height","t":"val height: Int","d":"aoc/utils/Matrix","k":"val"},
{"l":"aoc/utils/Matrix.html","n":"indexOutsideBounds","t":"def indexOutsideBounds(row: Int, col: Int): Boolean","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"indexOutsideBounds","t":"def indexOutsideBounds(index: Index): Boolean","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"indices","t":"def indices: Matrix[Index]","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"map","t":"def map[B](f: A => B): Matrix[B]","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"row","t":"def row(row: Int): Vector[A]","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"rows","t":"def rows: Vector[Vector[A]]","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"size","t":"val size: (Int, Int)","d":"aoc/utils/Matrix","k":"val"},
{"l":"aoc/utils/Matrix.html","n":"slice","t":"def slice(row: Int, col: Int)(width: Int, height: Int): Matrix[A]","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"slice","t":"def slice(index: Index)(width: Int, height: Int): Matrix[A]","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"swapCols","t":"def swapCols(a: Int, b: Int): Matrix[A]","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"swapRows","t":"def swapRows(a: Int, b: Int): Matrix[A]","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"toVector","t":"def toVector: Vector[Vector[A]]","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"toVectors","t":"def toVectors: Vector[Vector[A]]","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"transpose","t":"def transpose: Matrix[A]","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"width","t":"val width: Int","d":"aoc/utils/Matrix","k":"val"},
{"l":"aoc/utils/Matrix.html","n":"zip","t":"def zip[B](other: Matrix[B]): Matrix[(A, B)]","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"zipWith","t":"def zipWith(other: Matrix[A])(f: (A, A) => A): Matrix[A]","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix.html","n":"zipWithIndex","t":"def zipWithIndex: Matrix[(A, Index)]","d":"aoc/utils/Matrix","k":"def"},
{"l":"aoc/utils/Matrix$.html","n":"Matrix","t":"object Matrix","d":"aoc/utils/Matrix$","k":"object"},
{"l":"aoc/utils/Matrix$.html","n":"apply","t":"def apply[A](height: Int, width: Int)(f: (Int, Int) => A): Matrix[A]","d":"aoc/utils/Matrix$","k":"def"},
{"l":"aoc/utils/Matrix$.html","n":"apply","t":"def apply[A](height: Int, width: Int)(f: Index => A): Matrix[A]","d":"aoc/utils/Matrix$","k":"def"},
{"l":"aoc/utils/Matrix$.html","n":"fill","t":"def fill[A](height: Int, width: Int)(value: A): Matrix[A]","d":"aoc/utils/Matrix$","k":"def"},
{"l":"aoc/utils/Matrix$.html","n":"identity","t":"def identity(size: Int): Matrix[Int]","d":"aoc/utils/Matrix$","k":"def"},
{"l":"aoc/utils/Matrix$.html","n":"rotate2D","t":"def rotate2D(rad: Double): Matrix[Double]","d":"aoc/utils/Matrix$","k":"def"},
{"l":"aoc/utils/Matrix$.html","n":"rotate3DX","t":"def rotate3DX(rad: Double): Matrix[AnyVal]","d":"aoc/utils/Matrix$","k":"def"},
{"l":"aoc/utils/Matrix$.html","n":"rotate3DY","t":"def rotate3DY(rad: Double): Matrix[AnyVal]","d":"aoc/utils/Matrix$","k":"def"},
{"l":"aoc/utils/Matrix$.html","n":"rotate3DZ","t":"def rotate3DZ(rad: Double): Matrix[AnyVal]","d":"aoc/utils/Matrix$","k":"def"},
{"l":"aoc/utils/Path.html","n":"Path","t":"class Path[N](vertices: Seq[N], cost: Cost)","d":"aoc/utils/Path","k":"class"},
{"l":"aoc/utils/Pathfinder.html","n":"Pathfinder","t":"class Pathfinder[V](graph: Set[Edge[V]], start: V, end: V, heuristic: V => Cost)","d":"aoc/utils/Pathfinder","k":"class"},
{"l":"aoc/utils/Pathfinder.html","n":"shortestPath","t":"def shortestPath: Option[Path[V]]","d":"aoc/utils/Pathfinder","k":"def"},
{"l":"aoc/utils/Pos.html","n":"Pos","t":"class Pos(x: Int, y: Int)","d":"aoc/utils/Pos","k":"class"},
{"l":"aoc/utils/Pos.html","n":"+","t":"def +(p: Pos): Pos","d":"aoc/utils/Pos","k":"def"},
{"l":"aoc/utils/Pos.html","n":"-","t":"def -(p: Pos): Pos","d":"aoc/utils/Pos","k":"def"},
{"l":"aoc/utils/Pos.html","n":"distance","t":"def distance(p: Pos): Double","d":"aoc/utils/Pos","k":"def"},
{"l":"aoc/utils/Pos.html","n":"manhattan","t":"def manhattan(p: Pos): Int","d":"aoc/utils/Pos","k":"def"},
{"l":"aoc/utils/Pos.html","n":"transpose","t":"def transpose: Pos","d":"aoc/utils/Pos","k":"def"},
{"l":"aoc/utils/Pos.html","n":"tuple","t":"def tuple: (Int, Int)","d":"aoc/utils/Pos","k":"def"},
{"l":"aoc/utils/Pos3D.html","n":"Pos3D","t":"class Pos3D(x: Int, y: Int, z: Int)","d":"aoc/utils/Pos3D","k":"class"},
{"l":"aoc/utils/Pos3D.html","n":"+","t":"def +(p: Pos3D): Pos3D","d":"aoc/utils/Pos3D","k":"def"},
{"l":"aoc/utils/Pos3D.html","n":"-","t":"def -(p: Pos3D): Pos3D","d":"aoc/utils/Pos3D","k":"def"},
{"l":"aoc/utils/Pos3D.html","n":"distance","t":"def distance(p: Pos3D): Double","d":"aoc/utils/Pos3D","k":"def"},
{"l":"aoc/utils/Pos3D.html","n":"manhattan","t":"def manhattan(p: Pos3D): Int","d":"aoc/utils/Pos3D","k":"def"},
{"l":"aoc/utils/Pos3D.html","n":"toVector","t":"def toVector: Vector[Int]","d":"aoc/utils/Pos3D","k":"def"},
{"l":"aoc/utils/Pos3D.html","n":"tuple","t":"def tuple: (Int, Int, Int)","d":"aoc/utils/Pos3D","k":"def"},
{"l":"aoc/utils/Problem.html","n":"Problem","t":"class Problem[A](val year: String, val day: String, val part: String)(val expectedExampleSolution: A) extends App","d":"aoc/utils/Problem","k":"class"},
{"l":"aoc/utils/Problem.html","n":"day","t":"val day: String","d":"aoc/utils/Problem","k":"val"},
{"l":"aoc/utils/Problem.html","n":"exampleInput","t":"val exampleInput: Option[Vector[String]]","d":"aoc/utils/Problem","k":"val"},
{"l":"aoc/utils/Problem.html","n":"execute","t":"def execute(using printResult: Boolean): Option[TimedEval[A]]","d":"aoc/utils/Problem","k":"def"},
{"l":"aoc/utils/Problem.html","n":"expectedExampleSolution","t":"val expectedExampleSolution: A","d":"aoc/utils/Problem","k":"val"},
{"l":"aoc/utils/Problem.html","n":"name","t":"def name: String","d":"aoc/utils/Problem","k":"def"},
{"l":"aoc/utils/Problem.html","n":"part","t":"val part: String","d":"aoc/utils/Problem","k":"val"},
{"l":"aoc/utils/Problem.html","n":"puzzleInput","t":"val puzzleInput: Option[Vector[String]]","d":"aoc/utils/Problem","k":"val"},
{"l":"aoc/utils/Problem.html","n":"solve","t":"def solve(data: Seq[String]): A","d":"aoc/utils/Problem","k":"def"},
{"l":"aoc/utils/Problem.html","n":"year","t":"val year: String","d":"aoc/utils/Problem","k":"val"},
{"l":"aoc/utils/ProblemList$.html","n":"ProblemList","t":"object ProblemList","d":"aoc/utils/ProblemList$","k":"object"},
{"l":"aoc/utils/ProblemList$.html","n":"addProblems","t":"def addProblems: Unit","d":"aoc/utils/ProblemList$","k":"def"},
{"l":"aoc/utils/ProblemList$.html","n":"list","t":"val list: ListBuffer[Problem[_]]","d":"aoc/utils/ProblemList$","k":"val"},
{"l":"aoc/utils/TimedEval.html","n":"TimedEval","t":"class TimedEval[A](duration: Double, result: A)","d":"aoc/utils/TimedEval","k":"class"},
{"l":"aoc/utils/TimedEval$.html","n":"TimedEval","t":"object TimedEval","d":"aoc/utils/TimedEval$","k":"object"},
{"l":"aoc/utils/TimedEval$.html","n":"time","t":"def time[A](block: => A): TimedEval[A]","d":"aoc/utils/TimedEval$","k":"def"},
{"l":"docs/index.html","n":"aoc-N/A","t":"aoc-N/A","d":"","k":"static"}];