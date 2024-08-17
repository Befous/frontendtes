<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Halaman extends CI_Controller {
	public function index()
	{
		$this->load->view('templates/utama_header');
		$this->load->view('halaman/utama');
		$this->load->view('templates/utama_footer');
	}
    
    public function input(){
        $this->load->view('templates/utama_header');
        $this->load->view('halaman/input');
        $this->load->view('templates/utama_footer');
    }

    public function edit(){
        $this->load->view('templates/utama_header');
        $this->load->view('halaman/edit');
        $this->load->view('templates/utama_footer');
    }

    public function hapus(){
        $this->load->view('templates/utama_header');
        $this->load->view('halaman/hapus');
        $this->load->view('templates/utama_footer');
    }
}