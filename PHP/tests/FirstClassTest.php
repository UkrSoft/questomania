<?php
/**
 * Created by PhpStorm.
 * User: Nikolion
 * Date: 21.12.2017
 * Time: 17:11
 */

use PHPUnit\Framework\TestCase;
require __DIR__.'/../FirstClass.php';

class FirstClassTest extends TestCase
{

    public function testFirstClass_WithWorld_ReturnsString()
    {
        $firstClass = new FirstClass();
        $this->assertEquals("Hello, world!!!", $firstClass->helloToYou("world"));
    }
}
