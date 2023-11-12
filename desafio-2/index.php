<?php

function quickSortRecursivo($arr)
{
    $length = count($arr);
    if ($length <= 1) {
        return $arr;
    } else {
        $pivot = $arr[0];
        $left = $right = array();

        for ($i = 1; $i < $length; $i++) {
            if ($arr[$i] < $pivot) {
                $left[] = $arr[$i];
            } else {
                $right[] = $arr[$i];
            }
        }

        return array_merge(quickSortRecursivo($left), array($pivot), quickSortRecursivo($right));
    }
}

function quickSortIterativo($arr)
{
    $stack = array(array('l' => 0, 'r' => count($arr) - 1));

    while ($stack) {
        $frame = array_pop($stack);
        $l = $frame['l'];
        $r = $frame['r'];

        if ($r > $l) {
            $pivot = $arr[$r];
            $i = $l - 1;

            for ($j = $l; $j <= $r - 1; $j++) {
                if ($arr[$j] <= $pivot) {
                    $i++;
                    list($arr[$i], $arr[$j]) = array($arr[$j], $arr[$i]);
                }
            }

            list($arr[$i + 1], $arr[$r]) = array($arr[$r], $arr[$i + 1]);

            $stack[] = array('l' => $l, 'r' => $i);
            $stack[] = array('l' => $i + 2, 'r' => $r);
        }
    }

    return $arr;
}

$numerosDesordenados = array();

for ($i = 0; $i < 10; $i++) {
    $numerosDesordenados[] = rand(1, 100);
}

$numerosOrdenadosRecursivo = quickSortRecursivo($numerosDesordenados);
$numerosOrdenadosIterativo = quickSortIterativo($numerosDesordenados);

echo "Array original: " . implode(", ", $numerosDesordenados) . "\n";
echo "Quicksort Recursivo - Array ordenado: " . implode(", ", $numerosOrdenadosRecursivo) . "\n";
echo "Quicksort Iterativo - Array ordenado: " . implode(", ", $numerosOrdenadosIterativo) . "\n";

?>